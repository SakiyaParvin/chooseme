# Copyright (c) 2022, sakiya and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class Vacate(Document):
	pass
	# def on_trash(self):
	# 	if self.status == "Vacate":
	# 		doc = frappe.get_doc({
	# 			"doctype": "Student",
	# 			"full_name": self.name1,
	# 			})
	# 		for d in doc:
	# 			doc.delete()
