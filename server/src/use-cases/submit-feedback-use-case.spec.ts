import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
    {create: createFeedbackSpy},
    {sendMail: sendMailSpy}
)

describe('Submite feedback',() => {
    it('should  be able to submit feedback',async ()=>{
        await expect(submitFeedback.execute({
            type:'BUG',
            comment:'example comment',
            screenshot:'data:image/png;base64,ehauehauheuahe',
        })).resolves.not.toThrow();

        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();
    });

    it('should not be able to submit feedback without type',async ()=>{
      
        await expect(submitFeedback.execute({
            type:'',
            comment:'example comment',
            screenshot:'data:image/png;base64,ehauehauheuahe',
        })).rejects.toThrow();
    });

    it('should not be able to submit feedback without commnet',async ()=>{
      
        await expect(submitFeedback.execute({
            type:'BUG',
            comment:'',
            screenshot:'data:image/png;base64,ehauehauheuahe',
        })).rejects.toThrow();
    });
    it('should not be able to submit feedback with a screenshot invalid',async ()=>{
      
        await expect(submitFeedback.execute({
            type:'BUG',
            comment:'example comment',
            screenshot:'test.jpg',
        })).rejects.toThrow();
    });
});