function mainFunction() {
	var spend = document.getElementById("spend").value;
	var invest = document.getElementById("invest").value;

	if(spend == 0.0) {
        document.getElementById("result").value = "0 Tahun";
        return
	}

	if(invest == 0.0) {
        document.getElementById("result").value = "∞ Tahun";
        return
	}

	var numberOfYearsToBecomeFinanciallyIndependent = checkNumberOfYearsToBecomeFinanciallyIndependent(spend,invest);

    document.getElementById("result").value = numberOfYearsToBecomeFinanciallyIndependent + " Tahun";
}

function checkNumberOfYearsToBecomeFinanciallyIndependent(
    monthlySpending,
    monthlyInvest
) {
    var percentageOfInvestmentAnnualReturn = 0.119;

    var countMonthPerYear = 12;
    var annualSpending = monthlySpending * countMonthPerYear;

    var magicNumberForFinanciallyIndependent = 25;
    var amountMoneyForFinanciallyIndependent = annualSpending * magicNumberForFinanciallyIndependent;

    var annualInvest = monthlyInvest * countMonthPerYear;

    var latestInvest = 0.0;
    var numberOfYearsToBecomeFinanciallyIndependent = 0.0;
    while (latestInvest < amountMoneyForFinanciallyIndependent) {
        var latestPlusAnnualInvest = latestInvest + annualInvest;
        latestInvest = latestPlusAnnualInvest + (latestPlusAnnualInvest * percentageOfInvestmentAnnualReturn);
        numberOfYearsToBecomeFinanciallyIndependent++;
    }

    return numberOfYearsToBecomeFinanciallyIndependent;
}
