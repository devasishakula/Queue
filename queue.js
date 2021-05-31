let arr=[];
let dispStack=()=>
{
	str='';
	for(let elem of arr)
	{
		str='<div class="btn btn-warning text-danger font-weight-bold mt-3">'+elem+'</div>'+str;
	}
	$('#show').html(str);
}
$('#add').click(function()
{
	if($('#ele').val()==='')
	{
		alert('Insert Element...');
	}
	else
	{
		arr.push($('#ele').val());
		dispStack();
		
	}	
});
$('#poll').click(function()
{
	if(arr.length===0)
	{
		alert('Queue Empty...')
	}
	else
	{
		delete arr[0];
		let arrFilter=arr.filter(el=>{
			return el!=null && el!='';
		});
		arr=arrFilter;
		dispStack();
	}
});
$('#peek').click(function()
{
	if(arr.length===0)
	{
		alert('Queue Empty...')
	}
	else
	{
		str='';
		for(let elem=0;elem<arr.length;elem++)
		{
			if(elem===0) str='<div class="btn btn-success text-danger font-weight-bold mt-3">'+arr[elem]+'</div>'+str;
	        else str='<div class="btn btn-warning text-danger font-weight-bold mt-3">'+arr[elem]+'</div>'+str;
		}
		$('#show').html(str);
	}
});
