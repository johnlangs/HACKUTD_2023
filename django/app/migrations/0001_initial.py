# Generated by Django 4.2.7 on 2023-11-04 16:04

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='buyer',
            fields=[
                ('id', models.BigAutoField(primary_key=True, serialize=False)),
                ('GrossMonthlyIncome', models.FloatField(default=None)),
                ('CreditCardPayment', models.FloatField(default=None)),
                ('CarPayment', models.FloatField(default=None)),
                ('StudentLoanPayments', models.FloatField(default=None)),
                ('AppraisedValue', models.FloatField(default=None)),
                ('DownPayment', models.FloatField(default=None)),
                ('LoanAmount', models.FloatField(default=None)),
                ('MonthlyMortgagePayment', models.FloatField(default=None)),
                ('CreditScore', models.FloatField(default=None)),
                ('isApproved', models.BooleanField(default=None)),
            ],
        ),
    ]