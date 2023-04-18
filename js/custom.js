var sec = document.querySelector("section");

sec.innerHTML+=`
	<div>
		<div id="search">
			<input type="text" placeholder="Search For Student Name...." id="searchBar">
			 <!--<select id="select" onchange="Fun(this.selectedIndex)">-->
			 <select id="select" onchange="Fun(this.value)">
				<option>Select Persuing Year</option>
				<option value="1">+3 FIRST YEAR</option>
				<option value="2">+3 SECOND YEAR</option>
				<option value="3">+3 FINAL YEAR</option>
			</select>
		</div>
		<table id="table">
			<thead>
				<tr id="headTr">
					<th>Name:</th>
					<th>Class:</th>
					<th>Roll No:</th>
				</tr>
			</thead>
			<tr>
				<td>ASHISH</td>
				<td>FINAL YEAR</td>
				<td>1</td>
			</tr>
			<tr>
				<td>AKSHAY</td>
				<td>FIRST YEAR</td>
				<td>2</td>
			</tr>
			<tr>
				<td>AKSHITA</td>
				<td>FINAL YEAR</td>
				<td>3</td>
			</tr>
			<tr>
				<td>AVILASH</td>
				<td>SECOND YEAR</td>
				<td>4</td>
			</tr><tr>
				<td>DIMPY</td>
				<td>FINAL YEAR</td>
				<td>5</td>
			</tr>
			<tr>
				<td>PREETI</td>
				<td>FIRST YEAR</td>
				<td>6</td>
			</tr>
			<tr>
				<td>PRADEEP</td>
				<td>FIRST YEAR</td>
				<td>7</td>
			</tr>
			<tr>
				<td>VANSHIKA</td>
				<td>FINAL YEAR</td>
				<td>8</td>
			</tr>
			<tr>
				<td>DRISHTI</td>
				<td>SECOND YEAR</td>
				<td>9</td>
			</tr>
			<tr>
				<td>VERONICA</td>
				<td>SECOND YEAR</td>
				<td>10</td>
			</tr>
			<tr>
				<td>AKANSHA</td>
				<td>FINAL YEAR</td>
				<td>11</td>
			</tr>
			<tr>
				<td>MANISHA</td>
				<td>SECOND YEAR</td>
				<td>12</td>
			</tr>
			<tr>
				<td>RASHMI</td>
				<td>FINAL YEAR</td>
				<td>13</td>
			</tr>
			<tr>
				<td>POOJA</td>
				<td>FIRST YEAR</td>
				<td>14</td>
			</tr>
			<tr>
				<td>BALWANT</td>
				<td>FIRST YEAR</td>
				<td>15</td>
			</tr>
			<tr>
				<td>RAHUL</td>
				<td>FINAL YEAR</td>
				<td>16</td>
			</tr>
			<tr>
				<td>KHUSI</td>
				<td>SECOND YEAR</td>
				<td>17</td>
			</tr>
			<tr>
				<td>RICHA</td>
				<td>SECOND YEAR</td>
				<td>18</td>
			</tr>
			<tr>
				<td>SONAL</td>
				<td>FIRST YEAR</td>
				<td>19</td>
			</tr>
			<tr>
				<td>SHITAL</td>
				<td>FINAL YEAR</td>
				<td>20</td>
			</tr>
			<tr>
				<td>PRIYANKA</td>
				<td>FIRST YEAR</td>
				<td>21</td>
			</tr>
		</table>
	</div>
`;
function findStudent(){
	var typed=searchBar.value.toUpperCase();
	var TR=document.querySelectorAll("tbody>tr");
	for(let i=0;i<TR.length;i++){
		var TD=TR[i].getElementsByTagName("td")[0];
		var NAMES=TD.innerText;
		if(NAMES.indexOf(typed) > -1){
			TR[i].style.display="";
		}
		else{
			TR[i].style.display="none";
		}
	}
}
searchBar.addEventListener("keyup",findStudent);
	
function Fun(t){
	if(t==1){
		var TR=document.querySelectorAll("tbody>tr");
		for(let i=0;i<TR.length;i++){
		var TD=TR[i].getElementsByTagName("td")[1];
		var STD=TD.innerText.toString() || textContent.toString();
			if(STD == "FIRST YEAR"){
			TR[i].style.display="";
			}
			else{
			TR[i].style.display="none";
			}
		}
	}
	if(t==2){
		var TR=document.querySelectorAll("tbody>tr");
		for(let i=0;i<TR.length;i++){
		var TD=TR[i].getElementsByTagName("td")[1];
		var STD=TD.innerText.toString() || textContent.toString();
			if(STD == "SECOND YEAR"){
			TR[i].style.display="";
			}
			else{
			TR[i].style.display="none";
			}
		}
	}
	if(t==3){
		var TR=document.querySelectorAll("tbody>tr");
		for(let i=0;i<TR.length;i++){
		var TD=TR[i].getElementsByTagName("td")[1];
		var STD=TD.innerText.toString() || textContent.toString();
		if(STD == "FINAL YEAR"){
			TR[i].style.display="";
		}
		else{
			TR[i].style.display="none";
			}
		}
	}

}
