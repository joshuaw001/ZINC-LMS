include("db.php");
$conn = new mysqli($host, $username, $password, $dbname);
sql   = "select * from zinc_data;";

$result = mysqi->query($sql);

class User {
  public    $name;
  public    $username;
  public    $school_code; 
  protected $passcode;
  public    $grade_level;
  protected $zinc_id;
  public    $class_codes = Array();
  
  function __construct($_name, $_grade, $_class_codes, $_school_code) {
    $this->name        = $_name;
    $this->school_code = $_school_code;
    $this->class_codes = $_class_codes;
    $this->grade_level = $_grade;
    $this->studentdbid = mysqli_result->num_rows($result);
    this->zinc_id      = dechex($this->studentdbid);
    
  }
}
