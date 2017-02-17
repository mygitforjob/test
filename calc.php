<style>
	#calc{
		width: 250px;
		margin: 0 auto;
		border: 2px #4F5760 solid;
		padding: 5px;
		background-color: #D9E4F1;
	}
	table, input{
		width: 100%;
	}
	input{
		height: 50px;
		font: bold italic 110% serif;
		font-size: 270%;
		background-color: #EAF2FB;
	}
	button{
		padding: 10px;
		font-weight: 600; 
	}
</style>

<div id='calc'>
	<div id='display'>
		<input type='text' style='text-align: right' value=0 id='inpCalc'>
	</div>
	<div>
		<h5 id='ans' align='right'>0</h5>
	</div>
	<div id='keys'>
		<table>
			<tr>
				<td><button>7</button></td>
				<td><button>8</button></td>
				<td><button>9</button></td>
				<td><button>/</button></td>
				<td><button>C</button></td>
			</tr>
			<tr>
				<td><button>4</button></td>
				<td><button>5</button></td>
				<td><button>6</button></td>
				<td><button>*</button></td>
				<td><button>&lt;</button></td>
			</tr>
			<tr>
				<td><button>1</button></td>
				<td><button>2</button></td>
				<td><button>3</button></td>
				<td><button>-</button></td>
				<td rowspan="2"><button style='height: 80px'>=</button></td>
			</tr>
			<tr>
				<td colspan="2"><button style='width: 100%'>0</button></td>
				<td><button>.</button></td>
				<td><button>+</button></td>
			</tr>
		</table>
	</div>
</div>
<script src='jquery.js'></script>
<script>
	$('#inpCalc').on('click', function(){if(this.value == 0) this.value = '';})
	$('#inpCalc').on('blur', function(){if(this.value == '') this.value = 0;})
	
	$('button').on('click', function(){
		
		var str = $('#inpCalc').val();
		if(str == 0) $('#inpCalc').val('')
		str = str.slice(0, str.length-1)
		switch(this.innerHTML){
			case 'C' 	: $('#inpCalc').val('0'); break;
			case '&lt;' : $('#inpCalc').val(str || 0); break;
			case '=' 	: $('#ans').text( eval($('#inpCalc').val()) ); console.log('=');break;
			default		: 
				var val = $('#inpCalc').val();
				
				if(!(val[val.length-1] * 1) && ['+', '-', '*', '/', '.'].indexOf(this.innerHTML) > -1 ){				
					val = val.slice(0, val.length -1);
				}
				$('#inpCalc').val(val += this.innerHTML);
				
				
		}
		
	})
</script>
