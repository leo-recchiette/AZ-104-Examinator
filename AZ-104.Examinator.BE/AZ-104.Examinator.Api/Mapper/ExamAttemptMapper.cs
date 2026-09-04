using Examinator.Api.Models.Contracts;
using Examinator.Api.Models.Domains;

namespace Examinator.Api.Mapper;

public static class ExamAttemptMapper
{
    public static ExamAttemptDto ToDto(this ExamAttempt attempt) => new(
        attempt.Id, 
        attempt.Mode, 
        attempt.QuestionCount,
        attempt.Percentage,
        attempt.StartTime, 
        attempt.EndTime, 
        attempt.CompletedAt);
}
