// Copyright (c) 2022, sakiya and contributors
// For license information, please see license.txt

frappe.ui.form.on('Room', {
	// before_save:function(frm) {
	// 	frm.set_value('total',frm.doc.room_rent + frm.doc.mess_fee + frm.doc.coution_deposit)

	// },
	refresh: function(frm) {
		// frm.add_custom_button('Back to warden page', () => {
		// 	frappe.new_doc('Warden', {
		// 		room: frm.doc.name
		// 	})
		// })
		// frm.add_custom_button('Registration', () => {
		// 	frappe.new_doc('Choose', {
		// 		room: frm.doc.name
		// 	})
		// })
	},
	

	// select_floor: function(frm) {
	// 	frappe.call({
	// 		method:"frappe.client.get",
	// 		args:{
	// 			doctype:"Room",
	// 			name:frm.doc.select_floor,
	// 		},
	// 		callback:(r=>{
	// 			if(r.message){
					// if(select_floor:"first"){

					// }
	// 				frm.set_value('available_rooms',r.message.total)
	// 				frm.set_value('available_bed',r.message.no_of_bed)
	// 			}
	// 		})
	// 	})
	// },
});

