# Copyright (c) 2022, sakiya and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class Room(Document):
	pass
	# def validate(self):
	# 	self.get_list()
	# 	self.get_list_s()

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
			
	# def get_list_s(self):
	# 	doc = frappe.get_list('Room',
	# 			filters={
	# 				'floor':'second'
	# 			},
	# 			fields=['floor','room_name']
	# 	)
	# 	for d in doc:
	# 		if self.select_floor == "Second":
	# 			frappe.msgprint(("floor is {0} and room name is {1}").format(d.floor,d.room_name))
	
	
	# def before_save(self):
	# 	dob = frappe.get_doc("Room", self.total_rooms)
	# 	total_rooms = frappe.db.count('Room', self.total_rooms)
	# 	for i in total_rooms:
	# 		total_rooms = total_rooms-1
	# 		frappe.msgprint("total no of rooms reduced")

