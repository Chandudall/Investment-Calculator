import { handleInvest } from './Investprocess.js';

export default function Results({input}){
    const result=handleInvest(input)
    const InitialInvestment=result[0].valueEndofYear-result[0].interest-result[0].AnnualInvestment;
    
  console.log(result);
    return(
        <table>
            <thead>
                <tr>
                    <th>year</th>
                    <th>Investment Value</th>
                    <th>interest (year)</th>
                    <th>Total interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
           <tbody>
            {result.map(yearData=>{
                const totalInterest=yearData.valueEndofYear-yearData.AnnualInvestment*yearData.year-InitialInvestment;
               const investedCap=yearData.valueEndofYear-totalInterest;
                return ( 
                
                <tr key={yearData.year}>

                    <td>{yearData.year}</td>
                    <td>{yearData.valueEndofYear}</td>
                    <td>{yearData.interest}</td>
                    <td>{totalInterest}</td>
                    <td>{investedCap}</td>

                </tr>
            )})}
           </tbody>
        </table>
        
    )
}
