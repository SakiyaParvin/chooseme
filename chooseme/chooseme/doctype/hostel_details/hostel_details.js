// Copyright (c) 2022, sakiya and contributors
// For license information, please see license.txt

frappe.ui.form.on('Hostel details', {
	authority_link: function(frm) {
	// 	frappe.call({
	// 		method:"frappe.client.get",
	// 		args:{
	// 			doctype:"Warden",
	// 			name:frm.doc.authority_link,
	// 		},
	// 		callback:(r=>{
	// 			if(r.message){
	// 				frm.set_value('warden',r.message.warden_name)
	// 				frm.set_value('in_charge',r.message.in_charge_name)
	// 			}
	// 		})
	// 	})
	// },
	// refresh: function(frm) {
	// 	frm.add_custom_button('Warden', () => {
	// 		frappe.new_doc('Warden', {
	// 			room: frm.doc.name
	// 		})
	// 	})
	}
});
