using Examinator.Api.Models.Contracts;
using Examinator.Api.Models.Domains;

namespace Examinator.Api.Mapper;

/// <summary>Traduce una Question (con le sue opzioni/righe) nella forma esposta prima che l'utente risponda (QuestionDto).</summary>
public static class QuestionMapper
{
    public static QuestionDto ToQuestionDto(this Question question, IEnumerable<Option> options, IEnumerable<AnswerRow> answerRows) => new(
        Number: question.Number,
        Type: QuestionTypeMapper.ToDb(question.Type),
        Text: question.Text,
        Options: options.Select(o => new OptionDto(o.Letter, o.Text)).ToList(),
        // Solo i prompt, senza rivelare la risposta: da' la struttura della
        // domanda (es. gli statement di uno hotspot) prima che l'utente la riveli.
        Prompts: answerRows.Where(r => r.Prompt is not null).Select(r => r.Prompt!).ToList());
}
