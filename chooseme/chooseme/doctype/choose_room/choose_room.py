# Copyright (c) 2022, sakiya and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class ChooseRoom(Document):
	pass
	# def validate(self):
	# 	self.student_save()
	# 	# self.on_trash()
	# 	# self.get_list()
	
	# def student_save(self):
	# 	if self.status == "Occupied":
	# 		doc = frappe.get_doc({
	# 			"doctype": "Choose Room(",
	# 			"student_name": self.student_name,
	# 			"room_name": self.room_name,
	# 			"total_fee": self.total_fee,
	# 			"status": self.status,
	# 			"from_date": self.from_date,
	# 			"to_date": self.to_date,
	# 			})
	# 		doc.insert(ignore_permissions=True, ignore_mandatory=True)
	
	# def on_trash(self):
	# 	if self.status == "Vacate":
	# 		doc = frappe.delete_doc('Choose Room','self.student_name')
			
	# def get_list(self):
	# 	doc = frappe.get_list('Room',
	# 			filters={
	# 				'floor':'first'
	# 			},
	# 			fields=['floor','room_name']
	# 	)
	# 	for d in doc:
	# 		if self.select_floor == "First":
	# 			frappe.msgprint(("floor is {0} and room name is {1}").format(d.floor,d.room_name))
	# 		# {
				# "doctype": "Choose Room(",
				# "student_name": self.student_name,
				# "room_name": self.room_name,
				# "total_fee": self.total_fee,
				# "status": self.status,
				# "from_date": self.from_date,
				# "to_date": self.to_date,
				# })
