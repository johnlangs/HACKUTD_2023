from django.contrib import admin

# Register your models here.
from .models import buyer

class appAdmin(admin.ModelAdmin):
    list_display = ('id', 'GrossMonthlyIncome', 'CreditCardPayment', 'CarPayment', 'StudentLoanPayments', 'AppraisedValue', 'DownPayment', 'LoanAmount', 'MonthlyMortgagePayment', 'CreditScore', 'IsApproved')

# Register your models here.

admin.site.register(buyer, appAdmin)