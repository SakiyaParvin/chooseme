// Copyright (c) 2022, sakiya and contributors
// For license information, please see license.txt

frappe.ui.form.on('Cash', {
	student: function(frm) {
	// 	frappe.call({
	// 		method:"frappe.client.get",
	// 		args:{
	// 			doctype:"Choose",
	// 			name:frm.doc.student,
	// 		},
	// 		callback:(r=>{
	// 			if(r.message){
	// 				frm.set_value('name1',r.message.student_name)
	// 				// frm.set_value('room_name',r.message.room_name)
	// 				frm.set_value('date_of_join',r.message.date_of_join)
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
	}
});
