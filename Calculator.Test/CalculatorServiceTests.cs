using Calculator.Core.Interfaces;
using Calculator.Core.Services;

namespace Calculator.Test;

public class CalculatorServiceTests
{
    private readonly ISimpleCalculator _calculator;
    public CalculatorServiceTests()
    {
        _calculator = new SimpleCalculator();
    }
    [Fact]
    public void AdditionTest()
    {
        double start = 4;
        double amount = 4;
        double result = _calculator.Add(start, amount);

        Assert.Equal(8, result);
    }

    [Fact]
    public void SubstractionTest()
    {
        double start = 10;
        double amount = 4;
        double result = _calculator.Subtract(start, amount);

        Assert.Equal(6, result);
    }

    [Fact]
    public void SubstractionTest_Negative_Value()
    {
        double start = 3;
        double amount = 10;
        double result = _calculator.Subtract(start, amount);

        Assert.Equal(-7, result);
    }
    
}
