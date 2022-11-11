# Copyright (c) 2022, sakiya and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class Choose(Document):
	pass
	
	# def validate(self):
	# 	self.before_save()

	# def before_save(self):
	# 	exists = frappe.db.exists(
	# 		"Choose",
    #         {
    #             "room_name": self.room_name,
	# 			# "date_of_join": self.date_of_join,
    #         },
    #     )
	# 	if exists:
	# 		frappe.throw("Room is occupied")
		
		
	
