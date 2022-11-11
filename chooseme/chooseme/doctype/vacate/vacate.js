// Copyright (c) 2022, sakiya and contributors
// For license information, please see license.txt

frappe.ui.form.on('Vacate', {
	refresh: function(frm) {
		frm.add_custom_button('Back to registration', () => {
			frappe.new_doc('Student', {
				room: frm.doc.name
			})
		})
		frm.add_custom_button('Payment', () => {
			frappe.new_doc('Payment', {
				room: frm.doc.name
			})
		})
	},
});
