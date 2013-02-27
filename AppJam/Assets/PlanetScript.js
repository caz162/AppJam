#pragma strict

var radius : float = 10;
var gravity : float = 10;
var population :int = 1;
var maxPopulation : int = 100;
var call = false;
var wasClicked : boolean;
var planetName : String;
var ship : Rigidbody;

function Start () {
}

function Update () {
	var planets:GameObject[];
	planets = GameObject.FindGameObjectsWithTag("GravityAffected");
	if(call == false){
	addpop();
	call = true;
	}
	for(var planet:GameObject in planets){
	if(this.gameObject != planet){
	if(!planet.gameObject.transform.IsChildOf(this.gameObject.transform)){
	var distance = (planet.transform.position - this.transform.position).magnitude;
	var forward = (this.transform.position - planet.transform.position).normalized;
		if (distance < radius){
			var force = forward*(gravity*((this.rigidbody.mass * planet.rigidbody.mass)/Mathf.Pow(distance,2)));
			planet.rigidbody.AddForce(force);
			}
		}
	}
	}
}

function Fire(val:int){
	if(val == 1){
	var clone : Rigidbody = Instantiate(ship,Vector3(transform.position.x+10,transform.position.y,transform.position.z), Quaternion.identity);
	clone.transform.parent = gameObject.transform;
	population -= 5;
	}
}

function addpop(){
if(population < maxPopulation){
	population++;
	yield WaitForSeconds(1);
	call=false;
	}
	
}


