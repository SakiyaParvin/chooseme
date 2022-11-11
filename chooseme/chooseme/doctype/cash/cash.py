# Copyright (c) 2022, sakiya and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class Cash(Document):
	pass
	# def validate(self):
	# 	self.cash_pay()
	# def cash_pay(self):
	# 	exists = frappe.db.exists(
	# 		"Choose",
	# 		{
	# 			"room_name": self.room_name,
    #             "date_of_join": (">", self.date_of_join),
    #         },
    #     )
	# 	if exists:
	# 		frappe.throw("Payment process")

        
