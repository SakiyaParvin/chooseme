// Copyright (c) 2022, sakiya and contributors
// For license information, please see license.txt

frappe.ui.form.on('Warden', {
	refresh: function(frm) {
		// frm.add_custom_button('Registration', () => {
		// 	frappe.new_doc('Student', {
		// 		room: frm.doc.name
		// 	})
		// })
		// frm.add_custom_button('Vacate', () => {
		// 	frappe.new_doc('Vacate', {
		// 		room: frm.doc.name
		// 	})
		// })
		// frm.add_custom_button('Room', () => {
		// 	frappe.new_doc('Room', {
		// 		room: frm.doc.name
		// 	})
		// })
		// frm.add_custom_button('Hostel details', () => {
		// 	frappe.new_doc('Hostel details', {
		// 		room: frm.doc.name
		// 	})
		// })
		// frm.add_custom_button('Back to home', () => {
		// 	frappe.new_doc('Hostel details', {
		// 		room: frm.doc.name
		// 	})
		// })

	// },
// 	warden_name_link: function(frm) {
// 		frappe.call({
// 			method:"frappe.client.get",
// 			args:{
// 				doctype:"Warden",
// 				name:frm.doc.warden_name_link,
// 			},
// 			callback:(r=>{
// 				if(r.message){
// 					frm.set_value('warden_name',r.message.warden_name)
// 					frm.set_value('qualification',r.message.qualification)
// 					frm.set_value('address',r.message.address)
// 					frm.set_value('contact',r.message.contact)
// 					frm.set_value('duration_from',r.message.duration_from)
// 					frm.set_value('duration_now',r.message.duration_now)
// 					frm.set_value('in_charge_name',r.message.in_charge_name)
// 					frm.set_value('in_charge_address',r.message.in_charge_address)
// 					frm.set_value('in_contact',r.message.in_contact)
// 				}
// 			})
// 		})
	},
});
