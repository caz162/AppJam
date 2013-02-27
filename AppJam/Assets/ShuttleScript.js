#pragma strict
var initialVelocity:Vector3;

function Start () {
	rigidbody.AddForce(initialVelocity);
}

function Update () {

}
function OnCollisionEnter(theCollision : Collision){
	if(theCollision.transform != this.transform.parent)
	Destroy(this.gameObject);
	else
		Physics.IgnoreCollision(this.collider, this.transform.parent.collider);
}