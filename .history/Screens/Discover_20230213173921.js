import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View,Image } from 'react-native'
import React, { useContext, useState } from 'react'
import NewsContext from '../context/NewsContext'

const Discover = () => {

    const data = [
        {
            "category": "general",
            "img":""
        },
        {
            "category": "business",
            "img":""
            
        },
        {
            "category": "entertainment",
            "img":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASDxUQEBIVFRAVFRcQDxYVFRUVDxAPFRYWFhYVFRUYHiggGholHhYVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQGy0lICUtLS4tLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLS0rLS0tLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAEBQIDAAEGBwj/xABEEAACAQIDBAcEBwcDAgcAAAABAgMAEQQSIQUxQVEGEyJhcYGRFDJSoQcVQmKSscEjU3KC0eHwM3OTF/EWJEN0orPS/8QAGgEAAgMBAQAAAAAAAAAAAAAAAAECAwQFBv/EADIRAAEEAAMGBQMEAgMAAAAAAAEAAgMRBBIhEzFBUXGhBWGBkfAiMrEUwdHhM/EVI3L/2gAMAwEAAhEDEQA/AOTQ1atUIauU0IV61ZVSVatCFW60NItHlaHlShCXyCux6E7JwaTxHG/tJpGUQ4cC6oG3SYgnTUahNTaxI1053DxABpWF1QCwO5pW0QfJmtxCEcaY9DoZpMfEIVLvnEja6BQQWdm4Dv5kcTQhfQKKALDQDQDgBU6hc8vQ/wBaRba6SxwOYhrKACQdAoO7xoQugrK4cdIWLZi2tPtk7djlIRiBJw5N4d9K0ILph0Rgx0ZNgmIA7EgG/kr/ABL8xw5HwPaOBeCVopRldDZhvHMEHiCLEHiCK+or14VtbADE4xAuo60of9jMWPoMx8zUgLNBMCzQQewugWOxRbKqxhQpzSkhSGuRlyg33eVxQe3OiONwlzNCwQfbXtxW55hu87V71sKDLFfixLeW4fIfOmLmwqUjQ1xAUpGhriAvMfoj6M5IzjZR25Blgv8AZhvq3ixHoBzq6Tbrri5MNP2XiORb7mTer+DAg34bjur0aGMKAALAaADQAVzHTboiMYFmiYR4yMWjc+66b+rkt9nfY8LnmaTSBvSBpH7H2n1n7Nz2xxP2h39/fx/Nu51tyriegyyOHbERlGwzNEwP71RdgCNGUAg6cxXQ7M2n1l1cZZAd3BvDn3Hj41Dim4DgmqtSvpLsCDHYcwTjTfG49+J+DKf03HdTFflxqYf0pqC+aukfR+fA4gwTjXfG49yWP4l/UcD81lq+lOk+wIMdAYZh3xOPfik4Mp/TjurwLpB0fnweIOHmXtf+mwByzITYMn9N4OlCEDgsBLM2WFC7bzaxAHeToPOnuE6DYhtZXSNe7M8g8gAPnXUfRxh44YZDjFZHMoaMMpV3TINDbUAMGOtverq36RRJpBDccyR+tz861Rwgiy0nsF5/F+IyZy1krGNvf/kefPKLaB14VdLk9m/RxHvIlk7mZUTyC2PzNXSfRPHmLtiWii4rlVnXn2ybW/lPnTbFdIsS+gfKOSqPz1/OlskjMbsSTzJN/U1f+mLhRAHSye+iws8TEbiQ6SQnQ5iGt6hoBo9CD5orD9GNh4fRlOIcfHd7/wAosnyo3EY2BgscMIiCXsFyqpHcF46UkkcKMxIAG8k2A86V4nb6r/pDMeZuE/qflWnD4Ik2wE+fD+Pyq8RNiMdG6MAUfLkbFuNnfwHslvTXCEYoOBo8aubfEpKknyyUjRabbRkxE8RnkYmMSCO2oUMQzdkbsosB4t3UuVaw46ERTFoNneeQvgPgXovDA5uGbG4glv0mvL+iPmgxVq5VrSLVlqxroLVQarDVTUIVbVC9SY1VehCrQ1ehoVDV6GhCJQ1etDIavQ0IV4qEiVNanahCY4Po3PiMDmgylhMzMhOVpAFVVyk6XBL6G3vV3fQDYoweHu4/8xLZpjpdR9mMHkOPeT3Um6Iz5cMByZvzv+tdEmL1+frUsqsDF0aYmvO/pYjKSQYtdzA4eXxW7p8jJ6V1UeKqvaeDhxUXU4hc0eYMAGKnOu4hhqN59TSpGVeTR7WNt9dh9GytiMWZD/pwLm7ute6qPTOfIUeegOzTuEy+Ev8A+gaf9HdkwYKMxQZirsXYuQXLWAsSABaw0050qSyldNeuE2psVY9pddHa0y6L8OIZgrHwIsfEtXUvi7ClOzmM2MufdQFvQ2HzPyrRhx9RceAJ/jurIRTsx4C/47rpYkCqFG4AAeA0rR1buH51YajGthWdUqdZWVCXdbnp60JKMKgDQWuSx8TrVtQJ7VqnQhatVUzcPOrqGxAUKXJsAMzHhlAuflQgKcbaa0BtjZUOIVRKoujZoX+1E+648b2tx9KI60GrI5KAaNhJ7A5pa7UHQ9CvNtpYKSCQxyDvU/Zbvoe9dz0kmw/VMkpDMtioBHWKTz7v0rmdkbIecMVIAW173AJPAaV02YgbPO/SuPBeNxPhJixAii1zCwOIHn+x49QUmmnVBmdgo7/050qxfSDhEt/vNu8h/Wuu2h0NZ9TECfiXKGt5G9c3tDok0YLDOLXNnG+3AHT9a34SfBu+42e3Y37q6HAth/zNN+YOXtqfXRc5PiJHN3YnlfcPAcKzDwM7CNPebQcgOLHuAqPjXR9HsBlTrWHbcdm+8RcPXf6V18ROIY7G/cFuleIWX6AfOCPxOCX2F4lGiR3XmWj7d/E2+dcUq16JhbXsdx0NcLiMPkd0+F2T8JtXksYPqDkeCPI2sZ5h3vofwFUq1IipgVFqxrvqs1S5q1qoc0IVbmqb1NzVN6EKpDRCGg0aiEahCMQ1fGaEjNExmhCKSrloeM0QlCE+6NT+9H/Ov5H9Kr6TbZnhlRYmA7GZgQCGuSBfjwO7nS3CzFHDrvBv491Mtu4AzqMRF2hlysv2ltc7vOrmailojNtrigsJ04mVgJY0K3AYrmUheJAJNem7NwjzIWUgLbsHeGa2lu7dXjEOAMkqRje7KgPLMbX8t9e4YLExwxJDHokahEH3VFhc86i46JOcQEv2bijFMRJdr2j14FjZbDcLkW4Xv3Nl6eCeKQXUhgQD32IDDTfuYetIsd1cupFm+IcdLWYcQbC40uAATa4pc2Fdf9N77wDmta/ZBI3faZ2y8gqgCs31t81odsZ6N5Xdvnt1XTbQ2dmU9Xo/AH3SeR5VxkO3zgC/X4eQszAO2mVBy0vqbk8jprTFds4gHfv3BwQ3aLECx3HtwA6m2YDWxrlOmjYieITubqtmsBuQ7mOXda/E8auZiQGlhH3V2+cin+lkZG6yCKvevQNj9L8FibBJQrn7Ella/IHcT3AmnCYqM+6wPOxBt414FsWeGBvaZ7nLcQqN7PxbwF/U91dZsPpTFiHyKCkljlBOhtrv50jXBYDS9Yqp2113AFj+Q/WvN4fpA6jENC6l4gQNCL3+1lvyPDj3b66fF9JcMWUdciqwWS7MFupAKix8b+YoTylPoGub86IpAnSTBKLnExeTBj6LegsR01ibs4ZS7fEwKxjyPaPhYeNCMpT3HYmzCMbzq3cvD1/SqNszWhy/Gyxfyk3b/wCIal2yQzHO5uzasTxNIfpO2u8Rw0cRAcv1hvut7ov3e9VsIt48tfbUd6CbSGmzw19l1aTX/WqdqbUXDxZ/tnSJTxbn4CuNwbSzxmWaRhGxKYaKI/tJZNd3MCxvfkdwFL9qbLxccVsQpWNhkDAq2TMOYJy+HGtzMACcpeMw4czyB4kcaGhXOd4gW08xuLOY31zI4A7xZsjglsW3TNinBN1IurcXcWzHzvp3LXVptaaC0UJjsoAkzBrmYgMQCt7ZVKDxJrz7o/hbYwZ/cgzyzcjHELkfzHKv89dLDMW7TG7Nd3PAu5zMR3XNYgwYo7GTc3U8NTo0en1E+ipxkhw0hxcdFz6AvUUBbjXmAwDqV1GH6Xy7nhDf7bC/4WtTCLpdEdHSROBzIbeouK43rRUWxAAv+eg9apk8CiIOzc5vdQg8cmP+SEH/AMlzfznQHRfZsU2NKysvURku1zbrADZUHjvPcDzFdNtOeIzukKhUSyE5ic0h1IF9wAyetIsBLAXKmxW7zTdm5ygFnN924WHlQX1odSEALEufhDsb2AHAbvKt2KxD5MbnfJ9Ab9o/fnZzHoAtL4RNhaDDmve6upr8H1T4zhTe9IekMIGIYgghlWTTvUX/ACv51Q+MkPG3hp899UnXU1XPM14oWq8JgTBJnJ4EV6g9qVJFVvVrVRIayrpKqQ0O5q2Q0PIaEKpzVOapu1UZqEKiNqJjagI3oqNqEI6NqKjNAxtRUTUIRsZomOg4zRUZoQiEo3Z+NeJrru+0DuYf176CSrkoBpMEg2E8Z8K37dRkmXtWva7c+RO+qxts86UstwRzFvClOWa50YC9r3NuIuNLd/lWhj2u+4a+S6OEjE4N1Y/H+12ce2TRMe1++uKixTDeP0PO3LiB6k0ZDiQdx1/vYW8Tu520q5sTHbitDsERwXb4fa/fReNxAlwk0QIGaJ1HBQcpsT3CuIjZqt2htTq4SpGYyXjCnNZgRqLqDqRuqEsIaLWWbDhjSUn2tho2cNBeXDqixhowWyOt7hgNRe+a+43NV4DCPCevyMpN0gDDK7uwy3CnUAZt54kd9mJw8bEQYeQo1macyZrZ1VQbOtgWjFxbQampbQwkmJkDvIscIAVC5u5jH2sg1JO+xte++siwgKifolMuJgid1PXmxdbssbLrIDzKrryNMsP0dWPHZMQ+fDCF5kY/s+sCZUytY6FSwvY7gOBp5svDRxBSJpZit+rMmUKjMpQsFF2vlZhq1td1EzFGFpER1BzASIrqG3XAYGxrI7FBulrW3Du13jqvPsZMiyMYlf2fNaJmF8w8bC+t93Cui6MYmFiBnAY6AE2ue47j4UVtiUTgxsqhRoMqKpB56AcqRbF6PoXaXFyCLDowQksIxK3AZjw1HrarMROyGHbP0HuTyFcyolrryr13Z0NhXlH0i48SbTt9mICLwP2vQk16nsV4OpXqGV4/dTIwZdOAN+Fcx0r6JYfEh5YMqYjMQWVh1Tyj3kkAJyt36HneqIPFGsZtXNIGmu/LRB1roLq6FncqXxhwLOYpI9i7ZjWJIpTMjRF+rkiyFijm7IQ4NvEDgNRxabQmjiwzgIEOIEZihvcpGpv18pue219/3V1NiaJ6GbJwghyy9qUGzZ2IsRvAA3Wq/pN0VgljIglWF+IY3jYcifeHz8K63/MYNztpqNbINb7zegzfVZF76qysRweIbHsiRdVdHdVX5muHPfa85xcoTDO497FS5U/9rCbX8Gk/+qhcLtUqgXLcjQEnS3DSmMuDjxOL6sSCPDQKsCuRfsKCAQObEM3maE2vsuOJ7Qy9am69rEH9ayQYkhxfdOeST67h7UtknhxdCBkJYwb+mh/j0Vb7Tmb7Vv4Rb576rFybkknvN6ui2dIVzBTbnbT1rcUBJCgXJNgOJJ0AqwyGQ6m1UIgzcKRsKZMMW+1M3Vj/AGYyGf1bqx/I1DKKN2nbrOrU3SICBSNzFb5283LnwIocLVUWozc9fTh2/dWP0+nkoZa0RVtqrerFBUyGhpDV0hoWU0IVTmhZGq2RqFkahChI1D5qlI1UFqEIeN6KialsT0XE9OlKkyjaiomoCJqLiaikUmERouI0DEaLiNJFI2Or0qiKiUFCVKairFrSirAKk1xabCbHFhzN3rZwqNwB/P8AzQULiNj2F08beu7ysPId4JeWtMlaDiA4fU357Lox+JvZw7oDC4vILMCRw8fPh+VBXxIeTEK1yAwiVcxYq1gAV3dgXbTUmqMXis8mnujRe/maY4KbKLnh6nuqlz3EAEqrEzumO6hy+f0qtlYUxxnMCJJAS19HTDg7jyLHf3CmeF2wVstrj0A/vV+G2c/akkPbYHsjh3H0FAGMA7vKpCOwqWssJpgMXmlZtAoG4bqL9tF7DXjvF7c7UgkuN1MMAcwvxG+uXPgS+UudZBoUNKHE67+i2RTNY3JyB39gjJWBa447/Hj/AF86q2j0l9jjjPVM6lirFSMyPw0O++vEbu+iooxvobG4ck5lsdQ1iLqGUggkcdQPSpY7BCTDsjdbg0i+ZFEXpxF38pOIhzzrV+w91LD/AEiwI3bWWJr6rJCynN3kAirNk7XwUccpwQAWeUzTEMxBmNrntHTwFhrSrpFiHxSCKdVVAwYiO95GG7MbAgdwoTDYH3Y4wFUeSqvP/N9csQsjjdBA8kO0I0O8Ua0uz1rpdrc7CMzbR9ADW7+fjjoFDbO1GEzsjAAm++xBIF/nQH1vKRdmJ5C/591dm+BwqqCY0O4XKgsx3ceNCRrAzWRE3MbhRqFYKSNOZFdOLAxsaAdaA/C5bsaQbaOn+lyWBY3bXfv8dbfrTro20BxIM4vEvaPJ2G4Hu4+VWTxCXELFHqANeG4Zm+QtUcXg95UWYfPmKtfHtA7Kr3TmGCKJ1063O6HcP3Pn1Xp0PSrCBbA5QBYC1gB4CuW23tbAM5mijtiFv1ZWwVpCLB3HHKe1ffoK4yOG+9iPK4/MUSkCr7tyeJO8+A4CszcNIXfU4/jRUEQtBII977b/AFNKKpU8tWKtYRXRWHeqWFUSGiHFCymhJDStQkpq+U0LK1CdIeVqFkarpWoOV6EUqpHqjNW5HoYvTpOlTGaJiag0FFR1dlWgsR0TUbE1LYjRsJqOVRyJnC1GwmlsJo6E0qUcqZQmjY6XwGmENIhRpEIKtVaggq9VpUiloLVOMgZo2VTZiCAaLC1LLRSVLh2wjxtZ1I/I+Broej2Ezt1hHYjOn3peHpv9KavECLEXHfuplgwpQKAFy8ALDxtUxvVuYFQakePiyueRrpUFiDxBB4cO6ua23gZFkZo5CQxuM5VQBwF27I0HyqQKYchyun+WFRwmOyyCNFDlja17C9tNfGh4dnzSaNKvgrdY34Ir386v9iEIut8ykFibXBGouBcJ/Dcse6ov5pON6rontmJX3Sbi17ZTqBrrpuq1YCFzsQqc2Nr+A41qBl95vdAzW531A8OHlSrGztKRLLds2kEY0BUbnccB6d9Z8RiWwgXqSaAGpJ5AfAFf/wBcce2mNN9LPvoBzJ0Htc8XLG4KqwU/HkJPlyrlRLJDiA5JdWJCm989/ejuedgR3heF6b4g2Unq8Nu3BR6Zsm/zoeKJTGbBre7NG9yRvJYW8vzqgzyMozRFgJoE0QTysbj1081mh8S8Oxj2wtcWlxppsubfAOsAi9wIsXoTqATNoyHKkisOrbK0bk2jEgN0Dn7KsC6E8CRQzTFQXizrkZmsADPhXf345Yj78RN9Rz42Bo3YMihmwstmjk9zMBbM1yQe57H+ZW+Jap2z0dZLNC1wuiKxIkjHKOUdoDuNxWm0nscxxY4URoUiwm1HXEGdRHnII94pHc6E5WN6a4TaZcHMwZhnklYC0YdigSNefu28zS1cJiL3MZPikUnzNjU4MJMzDPdVBvqFUDwRdL99NQOqcyw65huOvma2qUdHLBltISL+gtu/z/DTEoOoNxcgHnY2ph1khTMZawO0189fVV5agwohlqlxUlGkLLQMxoyagJjRSeVCTGgpmomY0HMaeVSyoaVqDlar5WoOU1INTDFRK1UZqnIaptTDCpiNF9TU1jpiMPWxh615Fv2aDjWi4hUxh6sSKjZqJhV0NHQ0JElHQiqzGq3Qo3D0xgoCAUxgFQLFU6KkZGtEItQhWi0SoZVWWqCpUwlWqlWrHUcqjlQ2SpRkqbjz7xRPV1B0sCaA07gkaAsqUmJF9Bf5VTie2BlsGG65YD1XX/uaHvTTC4WMwmRzlsSB94cABzv+VdB0EbALHlxXAjxmKkecpHOjVV+dOqW4bY+LlOVOpIPBp5XH/HcA+YouXYKxDNiXzumqrYJCn8MY0qtDVhi63OXZgF3neM1rgHj/AN6zzYfKM16LVgseZn5HNq9dN3tw90o60nMvO5HO3L/OdZikBtbjGQvhY9kedqzFjLZkGi7+bDj+VREi2Cs2VSbwSbwp07Df5wvXGxZMGJixDgS1uYGtSA4AZgPL5rouh45hZMR4ex0YvKSCD1DtetD3QTYcsMp1B/wWreFw5Fw3BCkn8HG/zpqgm4Lh7/vLpl/ivv8AO1DNlsYkbOTriZfsrfgOPCw8b1ZjsbDNhHYWB4e55bVahoBBLjyNCueq8/PtvE5o44oy06jeCbPTg0a3XoEuxGzHkXNGRnQbjoHRrG1+BBUEfmCBQwlx5GXPIQOeRj+Ii59TTyFGYMy6A7ueXS361OCMgi1Sa/WjuXqvE8QH46UjUWB7AA97SKPAY08X/Gq/kRUjsPEH3m9ZGP8AWux6qoGOtWUKvKuSXo6/Fl9WP6U4w+GyIF32piY6raOnSMqCZaGlFMHShJxTDVIMSuel89MpxS+cVYI7VgiS6agZqYTLQUiVYIlaIUvloV1pk0NQOHqezVoiSsxVHqKa+z1r2enkTMacjDVsYam/s9bGHrXkW7IlHs1b9mpwMPWxh6WRPIlKwURHFR3s9SEFGRIxquFaYQLVMcVFwrVbolS6JG4daOjShcMKZRJWdzKWR8dLSx1YsdEJHUxHVZaqS1UCOgtrNlUDi35D/BThY6XbdwDuqsguVuCBvINtRz3VOADaC/nwrNi2u2Lg3fX++yo2fh4DGJJS6jNlYkDIx5AjUePjTXqzJ1gzRshQrCEIIXLY2tzP6VyLsw7DX01Cm/ZJ32B3URsvHdTKJLXAuGG4kEW3+lbZMO8guBs6kDv1XDjmjbTC2hoCd3kbHLXy11RDhkOVwVPIi2lNdkIGw76dvWbxXQfIWrm5cQzntMST2bsSxC+J7r0w+uHRgY1AUArY65ltbWqMcaYGneVPw2Jlvd6Dn20W5YaBbBsL5LWPvKwvG3lSvHRPLdidSbAC58+6tw7JxESdamcHgFUm/ivLxrnumaRTh3Xfi8QMJsaXv1FH0KPGzjxw637pZAv4c1SnjIAVsoUahIxaMHmQd/GnEkpWMM4Aew0G5TbtW86XYDCNNJ+dc/aNc8iIadysrvF5HuLMO1rQeLRTj6kmr8qd5o7YeEJBJ3frRq4JVYkeXdTGKAKoUbhWGOtseHymyURYXIbKAMdVtHTApVbR1oyrZlQDR1U0dMGjqto6kGqWVLJUpdiFpviFpbiBVrI1eyJKZ1oCZKazJQzQ1pbGtTIkokiqk4enRw9aOGqeRWhgSX2ao+zU79mrXs9PKjIkns1a9mpycPWvZ6MiMibdRW+oo0JW8lWKxBCCpiCi8lZloQheorOpovLW8tCEIIasSOiMtZloQpwUzw1LEo3DS1S9ipkjsJrGtXKlVQPRaisjhSwubqohKkEqwCpgVBV0qJcMrizqGHIgH86XYjo3A3u5kPcdPQ3+VOgKkBTa9zPtNKqSJkn3gFcdtLZAgAy3YHex335C26lTivRygIsRp8qqXCRDURpf+Fb/AJVTKHSOzEqgYZrdGaBcDs9FDZmByju0JroFx0ZF8w04caN2tgLtm4G3lYWpDjNlXG6uTiGEvNrk4phMhvh87oPH4vrG5LwrrNmYBY4xaxJ1J5+HdXG4bBSNIIwO0T5W513+Fw2SNUvfKAL1fgGU4mlo8MjAc4keqiUqBSiSKgRXSC7NIYpUSlEEVFhU1IBCslUSi1FvS3GzgVNjbVjG2UHiTS2YXomWW9UmtjGUt7GUhTFWupomstU1YhepqJhou1ZahCC6msMNGZazLTQgTDWupo7JWslCaurL1K1RK0JUtXrd60RWjQnSzNWZ6gaiTQhWZ611lUlqiWoQiOtrBiLUIWNQJNCE6g2vZkjAvJI4ijF7XJ4+W+ul2diIpJWhVnLrfMTC6p2TY2ZtDr3615FtrFvHPFLG5SSO7RsLXViLEi4tuJHnRy/SBtAD/XB04ol/kK5uIZIXnKRS5WKjlLzkIA6r2VcB975f3qwYH73y/vXjafSJtCw/ar/xrWz9JGPG+UeUamqNlNz7rNsZ+ff+l7MMB975VIYD73yrxkfSRtD96tv9tb2qR+kjH8Jl/wCNKWym5pbCfn3XsvsP3vlWexfe+VeMj6RsfxmH/GtbP0j4/hMv/GtPZS8+6NhNzHz0XsjYEEWJoWfY9/dI89K8l/6jbQ/er+Ba3/1Fx/75fwJUH4V7/ur3Vb8DI/7q9161hNkBdTYMeQ4UScB975V44fpFx/75fwJW/wDqJj/3y/gWpMw0jRQI91KPCSsFNI917AcB975VBsB975V5GPpDx/75fwLW/wDqFj/3y/gWpbGbn3U/08/Me/8AS9XOA+98v71E4D73y/vXlX/j/HfvV/AtQHT3HZiOtXcD7i8b/wBKNjNz7p/p8RzHv/S7jpJivZTHmsUlYxht2WS1wDzvr6UimxOY1x23NvYjFBUnlLIrB1UBQokF7NoL3Fzxp5GrkX1rbhWOaDnXQwcb2g7TX50TDMK1cUMqNU1U1rWxEVlqrCmrAppIWrVlqkFNby00KFqy1WZa3loQqrVlqty1vLQhatWstZWUIWZa1krKyhNaMVa6msrKELXUVH2esrKELfs1YMNWVlRtRtS9kB3itfVyfCvoKyspWo2s+rU+BfQVv6tj+BfQVlZSJUbWfVsfwL6Cs+rI/gX0FZWUWi1L6sj+BfQVsbKi+BfQVlZStNbGy4vgX0FT+q4fgX0FZWUWo2Vv6ri+BfQVsbMi+BfQVlZTTtbGzI/gX0FS+rI/gX0FZWUrRa39Wx/AvoKz6uj+BfQVlZRaLUhgkG5QPAVhw45VlZTtSBWvZxWdSK1WVIJ2tdVW+rrVZTRazJWstZWUKSzLWFaysotC1lrVqyspoX//2Q=="
            
        },
        {
            "category": "health",
            "img":"https://www.mapsofindia.com/ci-moi-images/my-india/2021/06/healthcare-trends-2021.jpg"
            
        },
        {
            "category": "science",
            "img":"https://img.freepik.com/free-vector/science-word-theme_23-2148540555.jpg?w=360"
            
        },
        {
            "category": "sports",
            "img":"https://img.freepik.com/free-vector/flat-national-sports-day-illustration_23-2148999705.jpg?w=2000"
            
        },
        {
            "category": "technology",
            "img":"https://transcosmos.co.uk/wp-content/uploads/2015/10/technology-customer-support1.jpg"
        },
    ]

    const context = useContext(NewsContext);
    const { setcategory, setIndex } = context

    const categoryhandle = (item) => {
        setcategory(item);
        setIndex(1);
    }

    return (
        <View>
            <View style={{ alignItems: 'center', marginTop: 20 }}>
                <TextInput
                    placeholder='Search for News'
                    onChangeText={(text) => { console.log(text) }} style={{ width: "80%", height: 35, borderWidth: 1, borderRadius: 10, paddingLeft: 10 }} />
            </View>
            <View>
                <Text style={{ fontSize: 30 }}>Category</Text>
                <FlatList showsHorizontalScrollIndicator={false} data={data} horizontal={true} renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => categoryhandle(item.category)} style={{ paddingHorizontal: 10 }}>
                            <Image source={{uri:item.img}} />
                            <Text style={{ fontSize: 20 }}>{item.category}</Text>
                        </TouchableOpacity>
                    )
                }} />
            </View>
        </View>
    )
}

export default Discover

const styles = StyleSheet.create({})