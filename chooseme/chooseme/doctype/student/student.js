// Copyright (c) 2022, sakiya and contributors
// For license information, please see license.txt

frappe.ui.form.on('Student', {
	date_of_birth: function (frm) {
	// 	frappe.call({
	// 	  doc:frm.doc,
	// 	  method:'get_age', 
	// 	  callback:function(r){
	// 		let doc = frm.doc
	// 		doc.age = r.message
	// 		frm.refresh_field('age')
	// 	  }
	// 	})	
	// },
	// refresh: function(frm) {
	// 	frm.add_custom_button('Back to warden page', () => {
	// 		frappe.new_doc('Warden', {
	// 			room: frm.doc.name
	// 		})
	// 	})
	// 	frm.add_custom_button('Room Allocation', () => {
	// 		frappe.new_doc('Choose', {
	// 			room: frm.doc.name
	// 		})
	// 	})
	// },
	// room_type: function(frm) {
	// 	frappe.call({
	// 		method:"frappe.client.get",
	// 		args:{
	// 			doctype:"Room allocation",
	// 			name:frm.doc.room_type,
	// 		},
	// 		callback:(r=>{
	// 			if(r.message){
	// 				frm.set_value('total_fee',r.message.total_fee)
	// 				frm.set_value('available_rooms',r.message.total)
	// 			}
	// 		})
	// 	})
	},
});
