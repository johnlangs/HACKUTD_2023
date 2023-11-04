#%%
from numpy import average
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
#%%    
batch = pd.read_csv('./data.csv')
batch['approved'] = len(batch) * [False]
batch['total_debt'] = len(batch) * [0.0]
batch['mortgage_percent'] = len(batch) * [1.0]
batch['ltv'] = len(batch) * [1.0]
batch['dti'] = len(batch) * [1.0]
batch['fedti'] = len(batch) * [1.0]
print(batch.head)

reject_res = {
    'Credit Score': 0,
    'ltv': 0,
    'dti': 0,
    'fedti': 0,
}
# %%
for i in range(len(batch)):
    is_approved = True

    # Check credit score
    if (batch.loc[i, 'CreditScore'] < 640):
        reject_res['Credit Score'] += 1
        is_approved = False
    
    # Check LTV
    batch.loc[i, 'ltv'] = batch.loc[i, 'DownPayment'] / batch.loc[i, 'LoanAmount']
    if (batch.loc[i, 'ltv'] >= 0.80):
        reject_res['ltv'] += 1
        is_approved = False

    # # TODO - Account for PMI

    # Check DTI
    ## Check total DTI
    batch.loc[i, 'total_debt'] =  batch.loc[i, 'MonthlyMortgagePayment'] + \
            batch.loc[i, 'CreditCardPayment'] + \
            batch.loc[i, 'CarPayment'] + \
            batch.loc[i, 'StudentLoanPayments']
    
    batch.loc[i, 'dti'] = batch.loc[i, 'total_debt'] / batch.loc[i, 'GrossMonthlyIncome']

    if (batch.loc[i, 'dti'] > 0.36):
        reject_res['dti'] += 1
        is_approved = False

    ## Check mortgage percentage
    ## if mortgage apart
    # batch.loc[i, 'mortgage_percent'] = batch.loc[i, 'MonthlyMortgagePayment'] / debt

    ## if mortgage not apart
    # batch.loc[i, 'mortgage_percent'] = batch.loc[i, 'MonthlyMortgagePayment'] / (debt - batch.loc[i, 'MonthlyMortgagePayment'])

    ## if mortgagte percent of percent
    # batch.loc[i, 'mortgage_percent'] = (mortgage_percent / batch.loc[i, 'total_debt']) * batch.loc[i, 'dti']

    # if (batch.loc[i, 'mortgage_percent'] > 0.28):
    #     continue

    # Check FEDTI
    batch.loc[i, 'fedti'] = batch.loc[i, 'MonthlyMortgagePayment'] / batch.loc[i, 'GrossMonthlyIncome']
    if (batch.loc[i, 'fedti'] > 0.28):
        reject_res['fedti'] += 1
        is_approved = False

    batch.loc[i, 'approved'] = is_approved
# %%
print(average(batch['MonthlyMortgagePayment']))
print(average(batch.loc[i, 'MonthlyMortgagePayment'] + \
            batch.loc[i, 'CreditCardPayment'] + \
            batch.loc[i, 'CarPayment'] + \
            batch.loc[i, 'StudentLoanPayments']))
# %%
print("Approved: ", len([i for i in batch['approved'] if i == True]))
print("Denined: ", len([i for i in batch['approved'] if i == False]))
# %%
sns.barplot(reject_res)
# %%
palette_color = sns.color_palette('dark')
plt.pie([reject_res[key] for key in reject_res], labels=[key for key in reject_res], colors=palette_color, 
         autopct='%.0f%%') 
# %%
