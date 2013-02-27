#pragma strict

function Start () {

}

function Update () {
var speed = 100.0f;
 
    var movement = Vector3.zero;
 
    if (Input.GetKey("w"))
        movement.y++;
    if (Input.GetKey("s"))
        movement.y--;
    if (Input.GetKey("a"))
        movement.x--;
    if (Input.GetKey("d"))
        movement.x++;
   	if (Input.GetKey("q"))
        movement.z--;
    if (Input.GetKey("e"))
        movement.z++;
 
    transform.Translate(movement * speed * Time.deltaTime, Space.Self);
}
