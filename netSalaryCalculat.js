// Challenge 3: Net Salary Calculator

function calculateNetSalary(basicSalary, benefits) {
  // Gross salary = basic salary + benefits
  const grossSalary = basicSalary + benefits;

  // PAYE (Tax) Calculation
  let taxableIncome = grossSalary;
  let tax = 0;
  const relief = 2400; // Personal relief in Kenya
// KRA tax bands (as of 2025)
  const bands = [
    { upTo: 24000, rate: 0.1 }, // 10% up to 24,000
    { upTo: 32333, rate: 0.25 }, // 25% up to 32,333
    { upTo: 500000, rate: 0.3 }, // 30% up to 500,000
    { upTo: 800000, rate: 0.325 }, // 32.5% up to 800,000
    { upTo: Infinity, rate: 0.35 }, // 35% above 800,000
  ];
  // Loop through bands and calculate tax progressively
  let remaining = taxableIncome;
  let lower = 0;

  for (const band of bands) {
    const taxableAtThisBand = Math.max(
      0,
      Math.min(remaining, band.upTo - lower)
    );
    tax += taxableAtThisBand * band.rate;
    remaining -= taxableAtThisBand;
    lower = band.upTo;
    if (remaining <= 0) break;
  }

  // Apply personal relief
  tax = Math.max(0, tax - relief);
  // NSSF Calculation

  const tier1Limit = 8000;
  const tier2Limit = 72000;
  let nssf = 0;

  if (grossSalary <= tier1Limit) {
    nssf = grossSalary * 0.06; // 6% for Tier I
  } else {
    const tier1 = tier1Limit * 0.06;
    const tier2 = (Math.min(grossSalary, tier2Limit) - tier1Limit) * 0.06;
    nssf = tier1 + tier2;
  }
// SHIF (replaces NHIF)

  let shif = grossSalary * 0.0275; // 2.75% of gross salary
  if (shif < 300) shif = 300; // Minimum contribution = 300 KES

  // Net Salary Calculation
  const netSalary = grossSalary - tax - nssf - shif;

  // Return results as an object
  return {
    grossSalary,
    payee: tax,
    nssf,
    shif,
    netSalary,
  };
}

// Example Test Case
const result = calculateNetSalary(50000, 5000);
console.log("Gross Salary:", result.grossSalary.toFixed(2));
console.log("PAYE (Tax):", result.payee.toFixed(2));
console.log("NSSF:", result.nssf.toFixed(2));
console.log("SHIF:", result.shif.toFixed(2));
console.log("Net Salary:", result.netSalary.toFixed(2));
