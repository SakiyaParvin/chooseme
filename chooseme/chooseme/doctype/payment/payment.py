# Copyright (c) 2022, sakiya and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class Payment(Document):
	pass
	# def validate_membership(self):
	# 	valid_membership = frappe.db.exists(
	# 		"Student",
	# 		{
    #             "full_name": self.student,
    #             "from_date": ("<", self.date),
    #             "to_date": (">", self.date),
    #         },
    #     )
	# 	if not valid_membership:
	# 		frappe.throw("The member does not have a valid membership")

	# duration = frappe.db.get_single_value("Cash", "duration")
	# 	self.to_date = frappe.utils.add_days(self.from_date, duration or 30)
