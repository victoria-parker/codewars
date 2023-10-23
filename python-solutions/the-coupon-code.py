# The Coupon Code
# DESCRIPTION:
# Story
# Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

# Task
# Your mission:
# Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

# A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

# Examples:
# checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  == True
# checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  == False
# DATE TIMESTRINGSFUNDAMENTALS


from datetime import datetime

def check_coupon(entered_code, correct_code, current_date, expiration_date):
    print('code entered: ',entered_code,'code correct:',correct_code,'current date:', current_date,'exp date:', expiration_date)
    if entered_code is not correct_code:
        return False
    c_d = datetime.strptime(current_date,'%B %d, %Y')
    e_d = datetime.strptime(expiration_date,'%B %d, %Y')
    if c_d > e_d:
        return False
    else:
        return True