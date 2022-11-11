// Copyright (c) 2022, sakiya and contributors
// For license information, please see license.txt

frappe.ui.form.on('Payment', {
	before_save:function(frm) {
	// 	frm.set_value('total',frm.doc.room_rent + frm.doc.mess_fee + frm.doc.special_fee,frm.doc.pending_fee + frm.doc.additional)
	// },
	// student_name: function(frm) {
	// 	frappe.call({
	// 		method:"frappe.client.get",
	// 		args:{
	// 			doctype:"Choose",
	// 			name:frm.doc.student_name,
	// 		},
	// 		callback:(r=>{
	// 			if(r.message){
	// 				frm.set_value('student',r.message.student_name)
	// 				frm.set_value('room_name',r.message.room_name)
	// 				frm.set_value('from_date',r.message.date_of_join)
	// 			}
	// 		})
	// 	})
	// },
	// refresh: function(frm) {
	// 	frm.add_custom_button('Back to registration', () => {
	// 		frappe.new_doc('Student', {
	// 			room: frm.doc.name
	// 		})
	// 	})
	// 	frm.add_custom_button('Cash', () => {
	// 		frappe.new_doc('Cash', {
	// 			room: frm.doc.name
	// 		})
	// 	})
	},
});
