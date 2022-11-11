# Copyright (c) 2022, sakiya and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document
from dateutil import relativedelta
from datetime import datetime

class Student(Document):
	pass
	# def validate(self):
	# 	self.get_age()
	# 	# self.create_student()
	
	# @frappe.whitelist()
	# def get_age(self):
	# 	if(self.date_of_birth):
	# 		today = datetime.now()
	# 		date_of_birth = datetime.strptime(self.date_of_birth, '%Y-%m-%d')
	# 		t = relativedelta.relativedelta(today, date_of_birth)
	# 		return t.years


	

	
