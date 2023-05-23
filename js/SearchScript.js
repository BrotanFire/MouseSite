async function Search(val)
{
	console.log(val);
	for(let i of document.getElementById("col_info_replace").childNodes)
		{
			i.style.display = "none";
			if(i.textContent.toUpperCase().includes(val.toUpperCase()) == true)
				{
					i.style.display = "";
				}
		}

}