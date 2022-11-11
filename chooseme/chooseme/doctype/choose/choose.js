// Copyright (c) 2022, sakiya and contributors
// For license information, please see license.txt

frappe.ui.form.on('Choose', {
	refresh: function(frm) {
		// frm.add_custom_button('Back to registration', () => {
		// 	frappe.new_doc('Student', {
		// 		room: frm.doc.name
		// 	})
		// })
		// frm.add_custom_button('Payment', () => {
		// 	frappe.new_doc('Payment', {
		// 		room: frm.doc.name
		// 	})
		// })
	},
	// room_name: function(frm) {
	// 	frappe.call({
	// 		method:"frappe.client.get",
	// 		args:{
	// 			doctype:"Room",
	// 			name:frm.doc.room_name,
	// 		},
	// 		callback:(r=>{
	// 			if(r.message){
	// 				frm.set_value('total_fee',r.message.total)
	// 				// frm.set_value('available_rooms',r.message.total)
	// 			}
	// 		})
	// 	})
	// },
});
