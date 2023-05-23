async function Change_Modal_BankInfo(idbankinfo)
{
	let Bik_input = document.getElementById('Bank_Info_Bik_Input');
	let idcharge_input = document.getElementById('Bank_Info_idcharge_Input');
	let dPeriod_input = document.getElementById('Bank_Info_dPeriod_Input');
	let stabnum_input = document.getElementById('Bank_Info_stabnum_Input');
	let FIO_input = document.getElementById('Bank_Info_FIO_Input');
	let nMoney_input = document.getElementById('Bank_Info_nMoney_Input');
	let idkadr_input = document.getElementById('Bank_Info_idkadr_Input');
	let idkadr_tmp_input = document.getElementById('Bank_Info_idkadr_tmp_Input');
	Bik_input.value = document.getElementById('BIK'+idbankinfo).innerHTML;
	idcharge_input.value =document.getElementById('idcharge'+idbankinfo).innerHTML;
	dPeriod_input.value =document.getElementById('dPeriod'+idbankinfo).innerHTML;
	stabnum_input.value =document.getElementById('stabnum'+idbankinfo).innerHTML;
	FIO_input.value =document.getElementById('FIO'+idbankinfo).innerHTML;
	nMoney_input.value =document.getElementById('nMoney'+idbankinfo).innerHTML;
	idkadr_input.value =document.getElementById('idkadr'+idbankinfo).innerHTML;
	idkadr_tmp_input.value =document.getElementById('idkadr_tmp'+idbankinfo).innerHTML;
	document.getElementById('accept_btn_bank_info').setAttribute("onClick",'Send_BankInfo('+String(idbankinfo)+')')
}
async function Change_Modal_Bank(BIKID)
{
	let Bank_Name_input = document.getElementById('Bank_Bank_Name_Input');
	Bank_Name_input.value =document.getElementById('Bank_Name'+BIKID).innerHTML;
	let correspondent_account_of_the_bank_input = document.getElementById('Bank_correspondent_account_of_the_bank_Input');
	correspondent_account_of_the_bank_input.value =document.getElementById('correspondent_account_of_the_bank'+BIKID).innerHTML;
	let location_bank_input = document.getElementById('Bank_location_bank_Input');
	location_bank_input.value =document.getElementById('location_bank'+BIKID).innerHTML;
	document.getElementById('accept_btn_bank').setAttribute("onClick",'Send_Bank('+String(BIKID)+')')
}
async function Change_Modal_Contract(ContrId)
{
	let Contract_idkadr_input = document.getElementById('Contract_idkadr_Input');
	 Contract_idkadr_input.setAttribute("value",document.getElementById('idkadr'+ContrId).innerHTML);
	let Contract_stabnum_input = document.getElementById('Contract_stabnum_Input');
	 Contract_stabnum_input.setAttribute("value",document.getElementById('stabnum'+ContrId).innerHTML);
	let Contract_idcharge_input = document.getElementById('Contract_idcharge_Input');
	 Contract_idcharge_input.setAttribute("value",document.getElementById('idcharge'+ContrId).innerHTML);
	let Contract_dogovorDate_input = document.getElementById('Contract_dogovorDate_Input');
	 new Date(document.getElementById('dogovorDate'+ContrId).innerHTML);
	let dateParts = document.getElementById('dogovorDate'+ContrId).innerHTML.split(".");
	var dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]+1); 
	Contract_dogovorDate_input.valueAsDate = dateObject;
	document.getElementById('accept_btn_cont').setAttribute("onClick",'Send_Contract('+String(ContrId)+')')
}
async function Send_BankInfo(idbankinfo)
{
	let BankInfo =
	{
    id: String(idbankinfo),
    BIK:  document.getElementById('Bank_Info_Bik_Input').value,
    idcharge: document.getElementById('Bank_Info_idcharge_Input').value,
    dPeriod: document.getElementById('Bank_Info_dPeriod_Input').value,
    stabnum: document.getElementById('Bank_Info_stabnum_Input').value,
    FIO: document.getElementById('Bank_Info_FIO_Input').value,
    nMoney: document.getElementById('Bank_Info_nMoney_Input').value,
    idkadr: document.getElementById('Bank_Info_idkadr_Input').value,
    idkadr_tmp: document.getElementById('Bank_Info_idkadr_tmp_Input').value,
    stabnumTSUP: "",
    FIOTSUP: "",
    nMoneyTSUP: "",
    userInput: "",
    dateInput: "",
    userConfirm: "",
    dateConfirm: "",
    userInputTSUP: "",
    dateInputTSUP:"" 
	}
  let response = await fetch('http://localhost:3000/Bank_data/'+idbankinfo, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(BankInfo)
});
	ShowBankInfo();
}
async function Send_Bank(idbank)
{
	let Bank =
	{
    Bank_Name: document.getElementById('Bank_Bank_Name_Input').value,
    correspondent_account_of_the_bank: document.getElementById('Bank_correspondent_account_of_the_bank_Input').value,
    location_bank: document.getElementById('Bank_location_bank_Input').value
	}
  let response = await fetch('http://localhost:3000/Bank_info/'+idbank, {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(Bank)
});
	ShowBank();
}
async function Send_Contract(idcont)
{
	let Cont =
	{
    idkadr: document.getElementById('Contract_idkadr_Input').value,
    stabnum:document.getElementById('Contract_stabnum_Input').value,
    idcharge: document.getElementById('Contract_idcharge_Input').value,
    dogovorDate: document.getElementById('Contract_dogovorDate_Input').value
	}
  let response = await fetch('http://localhost:3000/Contract/'+idcont, {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(Cont)
});
	ShowContract();
}