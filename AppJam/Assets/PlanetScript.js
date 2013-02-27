#pragma strict

var radius : float = 10;
var gravity : float = 10;
var population :int = 1;
var maxPopulation : int = 100;
var call = false;
var wasClicked : boolean;
var planetName : String;

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
	var distance = (planet.transform.position - this.transform.position).magnitude;
	var forward = (this.transform.position - planet.transform.position).normalized;
		if (distance < radius){
			var force = forward*(gravity*((this.rigidbody.mass * planet.rigidbody.mass)/Mathf.Pow(distance,2)));
			planet.rigidbody.AddForce(force);
			}

	}
	}
}

function addpop(){
if(population < maxPopulation){
	population++;
	yield WaitForSeconds(5);
	call=false;
	}
	
}

function OnCollisionEnter(theCollision : Collision){
	Destroy(theCollision.gameObject);
}
