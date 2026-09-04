using Examinator.Api.Models.Contracts;
using Examinator.Api.Models.Domains;

namespace Examinator.Api.Mapper;

/// <summary>Traduce una Question (con le sue opzioni/righe) nella forma esposta prima che l'utente risponda (QuestionDto).</summary>
public static class QuestionMapper
{
    private const string OrderedAnswer = "ordered_answer";
    private const string YesNo = "yes_no";
    private const string QuestionImageKind = "question";
    private static readonly string[] YesNoOptions = ["Yes", "No"];

    public static QuestionDto ToQuestionDto(
        this Question question,
        IEnumerable<Option> options,
        IEnumerable<AnswerRow> answerRows,
        ILookup<int, AnswerRowOption> rowOptionsByAnswerRowId,
        IEnumerable<QuestionImage> images)
    {
        // La forma da popolare segue AnswerLayout, non Type: DragAndDrop puo'
        // essere sia 'ordered_answer' (sequenza) sia 'selection' (righe con
        // pool proprio, indistinguibile da Hotspot lato contratto).
        var isMultipleChoice = question.Type == QuestionType.MultipleChoice;
        var isOrderedAnswer = question.AnswerLayout == OrderedAnswer;
        var isYesNo = question.AnswerLayout == YesNo;

        return new QuestionDto(
            Number: question.Number,
            Type: QuestionTypeMapper.ToDb(question.Type),
            Text: question.Text,
            Options: isMultipleChoice ? options.Select(o => new OptionDto(o.Letter!, o.Text)).ToList() : [],
            DraggableItems: isOrderedAnswer ? options.Select(o => o.Text).ToList() : [],
            
            Prompts: isMultipleChoice || isOrderedAnswer
                ? []
                : answerRows.Where(r => r.Prompt is not null).Select(r => new PromptOptionsDto(
                    r.Prompt!,
                    isYesNo ? YesNoOptions : rowOptionsByAnswerRowId[r.Id].Select(o => o.Text).ToList())).ToList(),
            Images: images.Where(i => i.Kind == QuestionImageKind).OrderBy(i => i.Ord).Select(i => i.Filename).ToList());
    }
}
