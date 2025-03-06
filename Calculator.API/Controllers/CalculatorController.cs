using Calculator.Core.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Calculator.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CalculatorController : ControllerBase
    {
        private readonly ISimpleCalculator _calculator;
        public CalculatorController(ISimpleCalculator calculator)
        {
            _calculator = calculator;
        }

        [HttpGet("add")]
        public IActionResult Add( double start,  double amount)
        {
            var result = _calculator.Add(start, amount);
            return Ok(new { result });
        }

        [HttpGet("subtract")]
        public IActionResult Subtract( double start, double amount)
        {
            var result = _calculator.Subtract(start, amount);
            return Ok(new { result });
        }
    }
}
