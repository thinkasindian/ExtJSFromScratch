Ext.define('ModernDesktop.view.appointments2.Appointments2View',{
	extend: 'Ext.panel.Panel',
	xtype: 'appointments2view',
	controller: 'appointments2viewcontroller',
	viewModel: {type: 'appointments2viewmodel'},
	requires: [
		'Ext.dataview.listswiper.ListSwiper',
		'Ext.dataview.plugin.ListPaging'
	],
	layout: 'fit',
	tbar: [
		'->',
		{ xtype: 'button', xui: 'plain',iconCls: 'x-fa fa-sort-amount-desc', iconAlign: 'right', tag: 'DESC', text: 'Sort', handler: 'onSort'},
	],
	items: [
		{
			xtype: 'list',
			bind: '{appointments}',
			emptyText: 'No activity was found',
			striped: true,
			grouped: true,
			ui: 'listing',
			selectable: {
					disabled: true
			},
			plugins: [
				{
					type: 'listpaging',
					autoPaging: true
				}, 
				{
					type: 'listswiper',
					right: [{
							iconCls: 'x-fa fa-trash',
							commit: 'onDeleteAction',
							undoable: true,
							text: 'Delete',
							ui: 'remove'
					}]
				}
			],

			itemTpl: new Ext.XTemplate(`
			<div class="testview" style="width: 100%;border: 0px solid green;">
				<table style="width: 100%;border: 0px solid green;" >

				<tr>
					<td style="font-size: 14px;">
					<div style="line-height: 20px;" class="xitem-title">Appt #: {ApptNumber}</div>
					</td>
					<td width="40%" style="text-align:right;"  >
					</td>
					</tr>

					<tr>
					<td style="font-size: 14px;">
					<div style="line-height: 20px;" class="xitem-title">Specialty: {AppointmentSpeciality}</div>
					<div style="line-height: 20px;" class="xitem-caption">Hospital: {ApptHospitalName} {AppointmentHospitalChineseName}</div>
					</td>
					<td width="45%" >
					<div style="font-size: 12px;text-align: right;">
					<span class="apptdate"><span style="color: blue;"> in: </span>{AptArrivalDtm:date("Y/m/d")}</span>
					<span class="appttime"></span>
					</div>
					<div style="font-size: 12px;text-align: right;">
					<span class="apptdate"><span style="color: blue;">out: </span>{AptCompleteDtm:date("Y/m/d")}</span>
					<span class="appttime">{AptCompleteDtm:date("H:i")}</span>
					</div>
					</td>
					</tr>

				</table>
			</div>
			`,
			{
				//disableFormats: true,
				getFont:function(val){
					if (val.toLowerCase() == 'n' ) {
						return false
					}
					else {
						return true
					}
				}
			})
		}
	]
});
