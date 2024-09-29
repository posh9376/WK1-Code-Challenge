function netSalaryCalc() {
    //promps user to enter their basic salary and any benefits
    const basicSalary = parseInt(prompt('Enter basic salary'))
    const benefits = parseInt(prompt('Enter your benefits'))
    
    //getting gross salry
    let grossSalary = basicSalary + benefits
    console.log(grossSalary);
    

    // PAYE tax calculation
    let paye 
    if (grossSalary <= 24000) {
        paye =grossSalary * 0.1
        
    }else if (grossSalary <= 32333) {
        paye = 2400 + (grossSalary - 24000) * 0.15
    }else if (grossSalary <= 40000) {
        paye = 4800 + (grossSalary - 32333) * 0.2
    }else if (grossSalary <= 50000) {
        paye = 6800 + (grossSalary - 40000) * 0.25
    }else {
        paye = 9300 + (grossSalary - 50000) * 0.3
    }

    //sample nhif and nssf deductions
    const nssf = 400
    const nhif = 200

    //totatl deductions
    totalDeductions = nssf + nhif + paye

    //getting net salary
    const netSalary = grossSalary - totalDeductions

    console.log(`the net slary is ${netSalary}`);
    
}