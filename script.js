var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} 
if (userChoice == computerChoice) {
         document.getElementById("result").innerHTML = "Its a Tie";
    } else if (userChoice == "rock") {
        if (computerChoice == "scissors") {
           document.getElementById("result").innerHTML = "You Win";
        } else {
            document.getElementById("result").innerHTML = "You Lose";
        };
    } else if (userChoice == "paper") {
        if (computerChoice == "rock") {
            document.getElementById("result").innerHTML = "You Win";
        } else {
           document.getElementById("result").innerHTML = "You Lose";
        };
    } else if (userChoice == "scissors") {
        if (computerChoice == "paper") {
           document.getElementById("result").innerHTML = "You Win";
        } else {
            document.getElementById("result").innerHTML = "You Lose";
        };
    };
    if (computerChoice == "rock") {
    	document.getElementById("comc").innerHTML = img.src = 'http://www.geneseo.edu/sites/default/files/images/grinding_rock_stone.gif';
    }
    else if (computerChoice == "paper") {
    	document.getElementById("comc").innerHTML = img.src = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxQQDxAQDxQQDw8PDw0PFBQUEBAQDw8PFBEWFhQVFBQYHCggGBolHBQUITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0NFA8QFCwcHBwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwrKyw3NywsLCwsLCwsLCwsLCwsLCwrLCwsLP/AABEIALcBEwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAABBAACAwUGB//EAEIQAAEDAgEIBwUGAwgDAAAAAAEAAgMEESEFEjFBUWFxkQYTIjJSgaFCkrHB0RQjYnKC4UOi8BUzRFOTssLxJGOD/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAECA//EABwRAQEBAAIDAQAAAAAAAAAAAAARASFREjFBAv/aAAwDAQACEQMRAD8A+nBEIBWCoiKiKCIqIoAioigFkVEUAsgrKKCqiNlEFUFZRQVsgQrKWQZFqxfGmrKpag5c8C5lRR3wAxOC9E+NcjLFW2BjnHA2NtoGgkDbjYbyt5rO45Nc/NzKaDvEux1Z3tyHc3QN67OTw2FrYYxiBjtvrJO1cOkaYhnuF6mewDdPVtHdZ5aztvsXosnUnVtxxecXHerqYYaLbydJWgeQgArBqi1YTFWE3BUDUc1EaCUbEesG9ZZqmag2DhtVhJvS1kLIpvPO4oZ+5K4qZ5QNZw3qJXrCog1RCCsEUUUEUERUUUBUURQRRRFBFFFEAURUUFVEUEUFEUEAQKsqkqDGplDGlxwAC8dNUdbI6okwhhd2B45BhcbQ3ED8VzqT+XawzP6lhzWjGRwPdZuO04geZ1KmR6Pr3NkIzaaKwiboDyMA62walv8AOM6ayJQm/XzDtvHZb/ls1Diu0AoiDrVQbJeKsBfgLsFxfxHcl6io6zAYRjSdb/2WZltg3ns4IOt9oZsIVutZtPJc0VZ1gHyR+0jwjmUg6OezxDkULt8QSHXt8Pqp17fCef7KwP8AZ8TVOz4m80h17fCef7I9c3wnn+ykDuaPE3mhmDaOaS64eE8/2QMo8J5pA91e8c0Ej1w2HmokHQVgqhWCjQhFAIoCigEUERQRQRFBRQFRRRBFEFEEUUQUEQUQuiouRl3KBY3MZ2pH9lovbHbfUNOO4nUnMo1giYXHUvLtY+aQgYSvHadqp4jq/Mbem7G5iaFFQ9c4xA3jabzyDDrX+AbtA3AAL04s0BrQAALADQAloWNhYGMFmt5naSdZWUlQtxmnTKudWVtxjhH6v/ZKVlZbTjfus1uO9SmpSTny4nSG6m8d6QbQ5z8T2W6hrITTI0QfJYyVN8G4Db9FWTUUQdcAi43rT7Md3MJKmaL/ABxThhbt/mCKt9nOz1CBhts5hUMTf6e1VzGbveJ+AVGmYNrfeapZvibzVLt3cnH5hTrG/wBNA+N1BclviHIquc3f7qr142fD5BVNTw5n6oL5w2O5KLL7Ud3JFB1QiFUKwWGxCsqohBZFVRQFRS6iAqIKXQFS6rdC6gtdS6qSq5yC90LqmchnILkrOWUNBJwAQdIuBlOsMrhGzFt7W8ZG38I1oF6qodPIM3EnuA6AP8x27Z/0uhBG2Bma03J7Tna3u2lZxtbC043e7Fztu4bAkJJ3SEhugaTqC3mMbpmWpubDEpSapIOYwZ8uz2Wb3LMPLrtiNhodIceIbtKux7YxmsG8nSXHaSr7G9LThhznHPkOknVwW7p7aVzn1NuJ0DWVI4nSHHR6DifkqGJKou4en7rWJp14D1Ripw3efQcFsI7oiNfbQrZys2FatiSFYhEBMCJERoF7FHMTOYpmIFurQ6tM5qhCoW6tRbqJSOiEUhT1YKda+65Oi6KqCigsEbqt1LoLXUuqXQLkRe6mcsS9VMiDYuVS9YGVZumRTJkVDKk31CXfVqwromVVMy5Rq7mwVZKg91uLjp3BSDavqy49WzEnA2+CwLmwNJwLyMTs3DclpakRdlvakd5ngsBHjnSdp+kNv2W73FXM7Z3Ue4ydt5zI/V24IPxHa7EQ0M0Od+Y7NypNVWPjk1WGDfyj5rFkTnnHtHYNA4n5BaRpJU3wbg0YbGgIRRucezfH2rYn8o+ZXQpsl6C/VoAGA4DV5rpxQAYAW+J4lKOdTZNAxdidmk+Z+QT7ItQwHomWxLURoFmwrVsa3DEbJSMgxEMVi8BYvq2jXpSka5qlku+pOprj5FLzVDgLuLIxte9rQgeJWT5wNa8/V5fgZ3ps87I2l38xsFz/AO3nSYU1O+T8TyXDkLD4rU0epdWi9hidgxKXqK7N77mRfmcAfd0+i89HT1k986QRM1tiFwOOZ2R+ohE5ChiAfUSNt4pJAQdwAIbf9Z4JEPO6QQA/3pPBhI8sUEl9tohgM9wGsQHNPD7o/EoJwOyyQhPU9ZZWqaHWFz3MLdK5Vt6CGpBW4cvORTkJ6Gt2oOtdAlLx1IK1zkBJVCUSVm5AHOWLpEXlLylXEGSZKy1KzmeufUSLWDWetSX2hzzZuPyVBTl5xwCYYQwZrBc7tJ4lXdwMR9kacdbtQ4LEVBfdsWDdbzoWb2a5ThqYNHmtG578GDNbw+SyIHNiGBu46XaXHhsWNnyYC7RsHePFdKlyTrdp5ldOKFrBhYfFByqTJOHawGzWeJ1rrQUwaLNFlV9dGzS4c0s/LjPZu7gEHTbEr2C4pynK/uMI4qrxKcXuawcbKjtumaNJCXkymwa15mpylTx/3k2edjbu+C5s3ShmiCEuO130CsHr3ZWv3Wk+SWnyi4d4tYN5XiKnLdRJcZzYh4WixH6Rc+iSdGXH7x73nebX4XufRWYPXVWX4m96TO3Nx+H1ScWXXPd/40L5HanOwA/riuE2SKLF3Vs3uIv/ADfROQdKY24Mz5Dsa0kczYJwkd+qpa+QgGaKNpHslxcN2glLx9Ey43mkmlO3CMc3kn0WsPSaeUAQ0zgLaXvt6NHzT0FLWS9+RsIOqNozveNyrdEiyHT04zn9UwD2nHPPvPs30KEmVo+7BG+pI3WiB4uAaPJhT9L0ZjBzpLyv8TyXu5ldiGjawYAD0ClHlzTVdRbOc2nZqDBnPH6nd39IamaTonG12fJeWQ2u+Rxe48ScV6YN2BWEW0rNHPbk2MC1h7qiec5gwJZfeW3UUpGaxmpg5bBFYjbi1FGW6Ete25eiIvpSlTQg6EpHLbLZMR1ZCwmgLeCyuqjptrtqv9sC5V0LoOoahu1YSztSBcsnyW1IN5pQlXFYzVDtTbpSQzO0BreJVDrnbcdwVS+w0tjHEXXP/s6V3flDR+ELRmSYh33PkPEoGRX07NLusdzWgy6ThFE4+SzYYY+7EDxsEJcslvd6lg3m5VDIkqpNQjCt/ZrjjNNYcbLh1GWy7Azu4Rt/YrnyVDX/AMKqnO9r7fzYJSPSSVFHD35A92wEvPILCTpMxo+4p3uHicAxvMrz+dUfwqQM/PJHGfS/wVHUtc7HOpoOGe53Nth6JSOrUZdq3i4LIWbWgu/nxC5NRd4zppXyD82c3mzPA9EuchSOP3ta6/8A62Rxn3xmn1QPRWnJzpTUTO8T3Ej3rO+KeSl5spU0d+2w22FrzwIaX/7QlZOkTDhHHJJutZh4ZxsPcXchyRTt7kDTsJdnkngXNPombdXoYyLeGNj+LD8Uo8zHUVcuEUWaN4c74ZrfRMsyFUuxnl6pp1ZzYhybZdeSVzvbzh+F2d6Nef8AaqNgd+LyYW/8B8UowpMhUzMXuMh15rS6/mu5QSwMIEcQv+Ii/Jcs0ROkOPHH4uKbpGFhB+g+AV8k3Hv8jsz4gbAY6m6vNdVkaS6Nuz4c4202T81axmF7nYMSpUjQR+SLs1oubADWTYBIPrHu7gDBtOLuWhZimLjdxL3b8bcNiQMSZSGiMF5291vM6eSWe6R/edYeFuA56Sm20oGLiAFbrQMGDzKBRuT8O6PRRMFztpUSogRVAVYFZaWRBVQVFIqPiDtK5tVk7W1dIFWBUHmJAW6VTrV6Wela8Li1mTXNxbiFahUSBElKuYPylZvY9ujEKhwqhaFz31pb3gQoMoNP/aKddEFR1OP6KXFQ06zzULmn2nhUaGjb4QUBRtGhrfdCxMQP8SQeSzdS3/xEo8h9FEOdVbRhwsFUxnb6lIOybf8AxUw82j5LJ2RAdNXUf6llR0XQf12iszS8PJlj6rmP6NMOmqqD/wDU/VYu6HwHvSyO4vB+JQdWRoHee4DeYgPUJOWrpmntTQtO+qaw8g5KN6E0viJ/0/qtW9DqYa3c2IKyZXpNcsL+LnTfIrAdIKVvccP0U8jfi0J1vRWnGp3vN+i2Z0agGhjj+r9kWuW7pJEcAJ3cGMA9SizLGd3YpDxeG/AFdpmQ4m6Iyf1H6JqKha3uxDmforx0lcenc+TREBxc4/JdqiyQ92Lg1vkm4esHdjaOaZZJUHQ1oTjpD9LSlrAwuOaNQwCdgpfCPks8lBwBM1i7UBoCdLydw3JRBE1vePkETLqaLBAMVg1QZ5l9OKOatECqK2UUuokSlgrXWQKtdZbago3Wd0boLXUBVLo3U0atcr6VgHKwcoFa7JbZBhgV5+qppYDiC5vqvXByj2BwscUHjI6hr9hOw6VnNQRO7wzTtXZyp0da/tR9h25ednfLTm0rc5u2y1UVk6Og4xv9UnLkSZugu5ldSGZj8WOzTxTH2qWPSM9u3SrSPNOppm+09Z3mHtu9F6uPKsb8HtF+R5Lfq4X6w3jgrSPHCafxu9FcTzeN3IfReudkhp7tjwWD8jblbiPNtnm8buQ+i1bNL43LtOyXbUgMnq3Ecxj5PG/3imGZ/if7zk82jW0dIlCcbHHW7mUzHTk7U7FTJqKnSkJxUydipk1HAmWRLNIXjp0wyJatargKVVWsVgEUUAspdAlVJVBJVSVACdC3ZDbTiUQuGHYonLIqVY4gKsCsgVYFRprdS6zujdQaXQuq3Uuoq4KuCsgVYFBqHK4csQVYFBsCsamlbILOAKsHKwKI8hlbosWkvpzmnTbUuKzKUkLs2YFu/Uvpd1z8o5KjmBDmhWjyvWxTC72gjxN0hZOyW4C9PJnDwk3+Kyyn0alpyX05NtNv2SVNlezs2YGJ49oYDzCoYNbLEfvIzxaS0/RO03SMaOsLd0jbjmFtHlAlv3gbNH4hibIOybBOLxkNdsKqHoMsFwvmskG1jwTyTDcpRHBwdGfxNK8rVdH3xm4B4hYsnnjwz3EbHWePVWD3MZjd3XtPmFu2nC8KzKZ/iRMdvaSw/MJynymz2XzQnf2m+h+SQexbEtmMXnKbKTz3ZY5NxsHcjYp1uU5G96PlcKTR2wFcLkR5Xb7TXDkUyzKUZ9q3EEeqRD4RulmVLToc08CCr9YrBtdAuWOetI4y7cEBLlpHCTpwWscQHFaAKCrW20K1kUCUEUVbqIPPgogrIFWBUbago3WYKIKyNEQqhEILBWBVQUUFgVYFZgqyDQFWBWV0boNQVa6yBVroizhfSuNlfo7FODgA7aF1wVa6D5lWZGqKNxdESWbNItvClNlSOQ2kBgl8QwBK+lPYHCxFwvO5Z6KRzXLBmO9FqjnxV80IxtNHtGOG8JuGpp6gamO/rTsXmZaapoXa3R7MS23yTEFVBUnH7mbdgb7tqo7dTkPW2xG5c6TJxGpWjqKinxB62PaNPmPqupRZdimweM13I8vordRxvsqYpw5ndc5vAkLv/Y2vF2EOHqOKXfQ2VqMIp3e1Z3Fo+ITUdjpbbgfkVWOmKegp04RkKUHR6hbRUhG0DcSF0IKdOMjss1YVpqYCxJJ3E3CeAUDVZFQBFAlVJRBJUDbotZtV9CAWUVc9FB5QFaAqKLLa11YKKKC4VkFEFgiEFEFgioogIRUUQQK10FEFgUbqKIg3RUUQZzQteLOAIO1eWyz0QY+7ouw7ZqUUQecFVPSOzJO20Yd4ZwG4/IroM6mpaXWzSNLgLZp/E36KKLp8qA4TUxBDs9mo3sbbjpC6+TOkgeQ14udmh3kRgfRRRMyjv0kjJcWatIIsQnY2WRUWRu1XBUUQWugXKKKogxWjW2UUUVYmyzcVFFUUuooooP/Z';
    }else{
    		document.getElementById("comc").innerHTML = img.src = 'data:image/jpeg;base64,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';
    };
    
    if (userChoice == "rock") {
    	document.getElementById("playc").innerHTML = img.src = 'http://www.geneseo.edu/sites/default/files/images/grinding_rock_stone.gif';
    }
    else if (userChoice == "paper") {
    	document.getElementById("playc").innerHTML = img.src = 'data:image/jpeg;base64,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';
    }else{
    		document.getElementById("playc").innerHTML = img.src = 'data:image/jpeg;base64,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';
    }
    	
    
    
    
