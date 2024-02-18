export function handleInvest({
    InitialInvestment,
    AnnualInvestment,
    ExpectedInvestment,
    Duration,
})
{
    const annualData=[];
    let investmentValue=InitialInvestment;

    for(let i=0;i<Duration;i++){
        const interestEarnedPeryear=investmentValue*(ExpectedInvestment/100);
        investmentValue+=interestEarnedPeryear+AnnualInvestment;
        annualData.push({
            year:i+1,
            interest:interestEarnedPeryear,
            valueEndofYear:investmentValue,
            AnnualInvestment:AnnualInvestment
        });
    }
    return annualData;
}
