from django.db import models

# Create your models here.
class buyer(models.Model):
    id = models.BigAutoField(primary_key=True)
    GrossMonthlyIncome = models.FloatField(default=None)
    CreditCardPayment = models.FloatField(default=None)
    CarPayment = models.FloatField(default=None)
    StudentLoanPayments	= models.FloatField(default=None)
    AppraisedValue = models.FloatField(default=None)
    DownPayment = models.FloatField(default=None)
    LoanAmount = models.FloatField(default=None)
    MonthlyMortgagePayment = models.FloatField(default=None)
    CreditScore = models.FloatField(default=None)
    IsApproved = models.BooleanField(default=None)

