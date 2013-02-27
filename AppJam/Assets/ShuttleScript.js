#pragma strict
var initialVelocity:Vector3;

function Start () {
	rigidbody.AddForce(initialVelocity);
}

function Update () {
}
function OnCollisionEnter(theCollision : Collision){
	if(theCollision.transform != this.transform.parent){
	switch(theCollision.transform.gameObject.GetComponent(PlanetScript).inhabitants){
		case occupied.allied:
		Debug.Log("Winning");
		break;
		
		case occupied.empty:
		Debug.Log("empty");
		theCollision.transform.gameObject.SendMessage("NewPlanet");
		break;
		
		case occupied.hostile:
		Debug.Log("Hit");
		theCollision.transform.gameObject.SendMessage("Hit");
		break;
	}
	Destroy(this.gameObject);
	
	}
	else{
		Debug.Log("Hitting Parent");
		//Physics.IgnoreCollision(this.collider, this.transform.parent.collider);
		}
}