import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Smart watch',
      description: 'A modern smart watch web project built using HTML, CSS, and JavaScript with interactive design and responsive features.',
      image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISDxEQEhERFRIQFRUXFxITFhYXERISFRgWGBUSFhcYHikgGBslHRUXITEiJykrLi4uFyAzRDMtNygtLisBCgoKDg0OGxAQGjUlHyUxNy8rLS03Ny83LS0tLTAtLys1Ky0wNS0tLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcCAQj/xABLEAACAQIDBAUGCAwEBgMAAAABAgADEQQSIQUTMUEGIlFhgQcyUnGRoRQVI0KSsbPSFzM0U1RicoKDosHTFnOT4SRDssLw8iVE0f/EABoBAQADAQEBAAAAAAAAAAAAAAACAwQBBQb/xAAtEQACAQIFAgUEAgMAAAAAAAAAAQIDEQQSITFRE0EFIjJhcYHB0fChsTNykf/aAAwDAQACEQMRAD8A7jERAEREAREQBERAERNfHYgomYC5vYA8IOpXdkbESE+Nav5tPaZ9+Nav5tPaZHMizoT4JqJC/GtX0E9pj41q/m09pjMh0J8E1EhfjWr+bT2mPjWr+bT2mMyHQnwTUSIobUqF1DIoDEC4JuLmw95kvOp3ISg47iIidIiIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCauOFwo77+7/ebU1sXxXx/pOPYlD1GpuhG6EyxIGnMzFuhG6EyxAzMxboRuhMs+RYZmYKtOwJ7NfZrJeRdfzG9R+qSklEqqu9hERJFIiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIieXcAEkgAC5J0AA5kwDxWJuACRe5uLX0tpr65DbW2ktGtSRiflVqG5JIupp9v7Uw7R6WYan8o1RVpAECs7KlJjcaIWN6nDioI75Ttt+UTZVVlFRt4Kd7EUKpsTbzXJTTTXjew7JF67F1NKLTkXddoqeYn34wXtE5oOmmxxwOIHqRv7k9/wCONkeliPoN/ckLSNWahydI+MF7RHxgvaJzf/HOyO3EfQb+5Pv+ONk9uI+g39yLSGahydH+MF7RHw9e0Tm/+ONkeliPoN/cj/HOyPSxH0G/uRaQzUOToeJ2koRiSOB+qSlB81JailgWQNYm/Fb2IN7eE5OOnOx9fxzX5PSdl8QKmvqlr2X5SsBWsq4hM2gCuDRZj2LvbL/NOxutymrklZQL0DPsjdlbVp1QEBK1AoJpvo9recOTL+spI75JSwzNWEREHBERAEREAREQBERAEREAREQBERAPFaqqKzsQFUEkngAOJnFfKd5Rih3SKGfQrRb8XSU6pVxA+e54rT4AWJvpe8+UrbfwfDtYZsoU5OVSqzZaFI9xfrHuWfmjpHWJrMrMXYEtUqHjUrNq7Gc3J+lX7mrtHa1fEVDVrVXeoeLMbm3YPRHcNJplr8TP0omB2bbWlRvel5tFStt828sQliN1l/prKp5SMJswYEnLTSpuzusqZHbE516pyqLrkvx6vjOkDi0mNhdGcTiyRRpkqOLHQCwJNhxc2U6KCZIdAdg08VWqGtk3VFCSHcrmdr5FGU5jezG40FhfsN2TbiUUWjhqW6RGzBMzOofMxYDMSbFXsdew+rTQw062xVVrRprUr+O6BUadR6Zr1cy9Zeoo3lPnbXRhaxHKZ6fk2plS3wl7A+gOFwb8fQN/XeedrbScsMRcje1C5uNEqWBqL3K1yR3Zh8wTZp7ddOoGUitlIzG9rcVuDo2oB7PET044Si47amR1ql79jSqdAaCtTU4pgXuDdR1XHBeOouD36cDeRi9FaIq5Hq1FXMRmCqTk1s2htfQad8kcZiKlVyrXGpPYASeI7OJkjgqgyFKgtY6kcBUB0OvC99RyuJpXh1DgpliqnZmvgvJ9hajhBjHub6ZFvlHPjPWN8lrZGfD4xWt8yqpT1jMpbXjykhUdaT0nUmzce7IcrL7Ah8Zv0NplajUdTmcG/K7cR7TKKnhtN+kQx0l6il7N29jtl11wuJWoaaEEUmazU9bCrhqovlNweBKmxBE/QnQnpSuLpoC4ZmBKVLZd6F0ZWX5lVeDL4jScvx+Ao7Tw1EVRlq2rLTqEkGmxIyki/XHU4HtMhvJ3tKpRrKjHKTVFJ9fxeKS4o1P3iN23bmXsnjVqMqbPVpVVUVj9JxNfZ+KFWklQaZxe3YeBXwNx4TYlR0REQBERAEREAREQBERAEREAREQDkHlQxBbE0V5CpiKx7P8Ahqa00/mq38JwHEVMzu3pEn2md38pX5SP8nH/AGuGnCKFBnIVFZmPBVBJPLQDvnESnubOydk1sS5p0UzMBmIzKulwvFiBe7AW75dejnk7O7fEYw5N3TqVThXzJUZKdrhjbqnUaDXVe05d7YOyaGCw9SlXscTibozq4IwwQqQhA4EkXJPZbhqd/Y7lqjU67llqIA5GoygEMRrqr02c27aZ4XnoUcE5wzsy1K6i8pn2ftXAihVpJhkWnXK0syC1Snh24Nf5zK2tzqSSb6mUzCswIS4Y6ZGHBwPXqDe4sdQRbjOhY7o/hKezMIuFD/LPWRq1cKK7kXtfLwUMFNuSg87yJ2DhaGD2edpV8MuIrYnEGlRoVb7mmyr8tWdbcc1Nhw+avC5M2U5KCUoJ6u1vczzjnvGT21uQGJAYC1grgXuLqrjVXt3G9+537Zothd2zKRZW1Ueiw0K3521F+y3bLx0hoUHweH2lh6K0d7VajXoITuxWClg6+iCAbi3zl53Jre0AGVKSEF6hVaYPAs2VVX6h4CbI5ai6mzW/0MuacWqe6ex8UFgC186aHtKnn/X/ANp4xRPAaFiAQeGYeaT3G9vGXbaW0cBgcWuzWwVKslFaVOtiqp+XZmUF2QgaZVYGwIuSRpYma2H6MUvjo7NqkmitQ8SQalA0jURbj91CRbh2ydPFRlB5k0rNr3sdlh3GSs762f1Khvbi2pGtr+A9ug9kyLiicrDQixvzBFv6y74B8LjqmNwjbNo4UYejWdcRT0q0WptlAraDUjrWJ5HjxHPsGdAeFw2nfcE/XJUMQ6kmmrP8ldegoK9yYGIy7vIctqiEeohs3rF3Eg6CFcRjKSnrbhKg52rJTWpcX/XW831p+YCbElSP3XUHTwmth1ttbEDlumHgEt4zD4pBKkvn8mnBSbn9PwfonoliM9AnkSHA7FqKr/WTJyVroH+Sp/lUPslllngI9afqERE6REREAREQBERAEREAREQBERAONeUr8o/g4/7XDSoeTvaQoYdGNLeNkxG7Bawc2ZjhzoSQz06VrW17bkS4eUn8o/g4/wC1w05/0ac/AKYYGyszIygEq4bmPR5Ed/hNeBoqrNxfBVi6mRXNHau2Hq46rWseroFsQxw4AFPTtChT28ZZOjNYF6XWtqcj6ZCL5ipPcbEjsue0CE2ogDiqgVrag3INjq1N27iSVbl7hl2NXUPYEKCbmlU6mvpo3mg94Nuek9qnTlBOD+hgqOM/Mi99O8I1HZWA3Gu6xNZwvPId4TT77Zrd9j6pg2s4xOwsHXQaUsTW3lrXV6mds1uZOYac81uJkrh8acRh6VN7lKJOmX5S54s3Iix4Dja47tHANX2eKtOkaW4rNdRWUPSe40BAtm5WsR9QmaEJL/ZSv8k5ST+LWCUAmw0R6bP8KxjMqKQCUFHJnQsw0ug1JHnSrYzHr8L2eBg1w3wJqO9JINTEZHp3rOoUWNkY8W846yT2p0grV3DYnLmpjIi01KUaaG2ZVS9xeym5udAOFr49u7TOPo06dXdh8OoWmMpGdBbVmJOYnLqQB6ppjh53zSW7bdu1/wCyEa0V5V2MHlHwjttrE4exD4ipT3X6+9VApX964/dMuFehTxPSmqpLWwtJWKqSDUenTpkKCOFi4+jKfS8oO0KFOnTAoVDSBRKtWkHxVNRplV81iQOZBvzvITZG0qy4j4VTqt8IVmqb3i7M185YHQnrG6kWteQVKrJKD0cYtJ83t/wtlOEVmWqbuzpXR/pFidqVvgeJCHD42izHdAo9BlGZdb3YAjKQ17m1+YnNqVhUUXuCeIOgDcePfp4S0v09xtYGlahS3wyvUo0t3WYHzruWNr66gA9kg9pYYpkOXQKCB1QOwjTsNjbvMvw1Fwk3bKtNN9u5nrzUo2vcyYzC2bKVPzipPA6ByPapHjNBGB2tVI4Gj7OpqPbeWHagzU6VXXUDQ62BGt7c+t2yt4V77SJv/wDWHt3cy+J60E/f8lmD0qW9jv8A0DP/AAqf5VD7Mf8A5LNKf5P6/wAlTXm1Cl/Jp9TrLhPn0etUXmERE6QEREAREQBERAEREAREQBERAON+Un8o/g4/7XDTlOyK5XDUwVNmLkEW11sdQQZ1bylflH8DH/a4ac06PZDhEBqMpBe6gEqdf2hPQ8Lv1tH2M+OaUdTZo1AwuHYacHAPh1hebdFlA69JT3gdT16cD33nhEpqNHB9d/qymZKZQ/PpAm99chGnMnKPZPocyXqZ4zu3oiTwFXd3qUHdRYEqCCDr87QjXhfKfXLTsjayOClXd5WFgOKMxYDNTPpAZmy8dO6UgYR9SrU371qUz71a/vmGlj6iEj5PsZcykH1i+vjwlFWnGa0epdSqyjuXTauDw2cGmcKGUIHFdlylBUrb0gsbXJyWI62ULbjeVLa+NwW7xD0Gph6NHDqgLANXzth2NRee8ANZKg5C3a1veIHwlcrhyun4twSLekeJHrN+/hNfB4Pd3RAjKx61GqgVm7wdSD2ZW7JT0aieki7rU7aoz7LrYerQpGoMOoLqKhd0FUVPhFALzz7vcGqSRp5/MC2rt6ki4gVKAVVKIXWkaZyVLWLE0r0731OXTXXW8xY3ZdJrtRzI6XzU2sHW2pA9JfC/rn3YW0t03yiAg+jprzt2H3erjLadGSlmk2w6sXC0USabP31Depferoyjgrccy89QQw9k3auHFTClrHMii2YnUKDcgE6XBOul5v7KoU0qb6k5elVNqg0vTDXK3A4ZT7r8eMkaWzMlZkOUpUuTfziTpbQAWt4yTrW0ZCMbkNSpl8GAQBkutydAFuMw7dO2VDA08u06g0/Engb/ADOffL5TwWXD4lTb5N215aAeN7C/iNZTqqZdsVBcH5DivDzOV5g8RlelZc/Y0YWPnv7HVOi1c01wzgXsqdW4BYFAGUAkXNjf1qJ0TD1g6hgCOIIPEEEgg8tCCNNJx3DV2pNhaujhaC5aVUZqKOMh3yrfSpyv2TqvR6uXw6ubXcljbhd+sbeLGeFE9Wq7skoiJ0qEREAREQBERAEREAREQBERAON+Un8o/gY/7XDTkOAwxTCpXL9V2dQqZd5deI62p4g6XtmF7XE695Svyj+Bj/tcNOW9HtsZMKcO+GSrRc5m+UenULAmzBhcL2cDcaS/C3zaEa9u5pNtKnwZazjsZtPZwmQYvQZKFGmDwapqSO5f9jNcuS1lVQeSJe4/adiSPbf1T3RQZgWIY87nqX5/tfV6+E9OGeX7b+TPkiiUwlQsbBqbMvzaVElvchlipYQMtsluHnABhqOKgKfbKxSYgWtVKg6imOoL8NBoD4CZq2Ip2uteor+iyOKfqJN9eHZx4z0FaCu2ZpQTeiLXV2eFAslJgDe7Cop1/ZPjPBV8rKoUg6FM2cLoNVDgOtvUZEbN26QAGWmF9NVL+LBnPukhh9sqcucqFJ1QhhbsZTe07GaeqKKkUaleuWQqTqlsufzgvAge7Tn3TTp081yQSF8Cezuvz05DnxkviUptmdHzKo04XJ1Fr3vy8Ne6aGGq8WK3yX48LcCPYPrm2Ci1oURk7En0d2p8HqlGVTTcZT+tzGtjLjUrK1OhUAVzRqhLkX0awWoLc8rKZy7FVLsb6leB11XkdZZeiO3kUtQqsQWA1NwA6sCrDsJBN79nhM2Jw9vMjRSbSLaaJPwkAfja9hfhZUUN6uDShbTH/wA3VsLAYdbC1tN0LS+4di2QgkrULMCOBD6ldNTcc+Vj2Sjbbt8fVwDe1BRpwHyQ0E8PGvype5vw61uXjYuzKbthK1l3op0qbB6S1RUotkO6GZgKbZvn2NhedO2Vhd3SyBcozVCF9FWdio7rAjTlwlQ6B4XMKDnglFW8coRfreXqeVE31bXEREkVCIiAIiIAiIgCIiAIiIAiIgHG/KV+UfwMf9rhpy7ZpWpgaVJEc1UaoWKqCMpJIIC9YnvbQcuM6h5S/wAo/g4/7XDTkmylU4ddAGBbXPYnXsKkD3TZgEnU14K8S7LQyrSyiwU3J7Dr69L/APnOBgCeNJ248ARY62FuQnqrUq/nfFqiMQOFrkX4TVzuT1qjHvLiezeKVmjH5uzJClhWA0WuP2WsQTxtY909pQK6jeA9joWv4rNOnYnR/wCb/abFGs40zfzOf+20OrFFMoz5N6hUQMN5TP7SAg+8AyRo4ag4slZBm/5dQWv3d019k1aub8fTUcbN/wCf7y1YdnIW70G7AVJv+8Zx14lHQk9v7IHDbMALgkXyEgIwZWty01HHjIOkSWtxvcacCRredHq1UUDMKKW1YKFzZRqSBz0voNZSqtKlSqsysXAYlVUW0vYC55Wv7OEtpeI0qbed2LqeFqMh8VW83h5pHfYXI48NLTb2Zsmo43pR8igWspJY66KACT4TYU0iVcL+MJUIAWZLFiTndRSJsL2BvpoOzb2d0gxLoKZVC56rVbDVQbc1B5m2tjl4S1451P8AHHTlmjpZFqbu2ek/wKglDDKN4wNqzAFVUWvkXW+pNuQtzItKd0SctjajMxZmp1CWY3ZiQbkk8T3za6a1g2LKj/looP7Tdc+5lHhNToh+WP8A5T/9JnzGJm51G7mynG0UfpLoClsMh7aOHH8hP/dLRK10D/Jaf+VQ+yWWWZ0XT9QiInSAiIgCIiAIiIAiIgCIiAIiIBxrymL/AMVTHppj0/evQcD2KfZOLYXCjd9Y21IsB2d87/5XcAwQYhQSaLLXAHzkVTTxCD+G2b92cPaii1aq5Fe53iHtRuzt9vOacHbqWZyvtc0zh6Y+fb2T6rpwvc92v9BMgwpZtFS3YOP/AE/0mzTwdReCUx+0xPu0nqxjJ7IySaW7PmHQm9lsBzbW0kaKUFPW3x7Osqrf1DWa9PC1D57+oDKqj1WJMlsBspVQ1alVVXMF0zF7kEk3YDTTskasFBZpafvBSrydov8Afk3NnGlc5KAyjUl8xI14nNpz4d83sVtFgpCqijkFUZvE2meps/djdqWNrXY2Bcnlbl7eUg8awUEW1Um4vp3eueNWq5peXY9KjTyx13PGIxGbi1teZ568TIjE4nquQyi1tNSWJI4dh4nlwPdPGOxBbgTp6h427IwCFmF2UAXK5kBF9GYX4jzAPEjtihTU55WSnKy0NzBIXWlUBbRFDXve/AW4A5cr2v6XfJ7BJ1mq1Oqq5na3You3uE9YDZiFQAzMP1bGwubAeJPfrrwmr0wxgpL8ETz2sap7AbMtLx0Y92UczPerYiNCjlW5jUM0rsqONrmpVeoeNRma3ZckgeA08Js9GWy18RU5U6FQn6Bmk0meh2C3rZP0qoA3dhqdmqse7KuX1uO2fPNmvc/RnQimVwyg8VSkp9a0kv8AXLFI7YNErQUsLNUu5HZm4DwFh4SRnEdnuIiJ0iIiIAiIgCIiAIiIAiIgCIiAR+3Nm7+iUBAcaox1AYcj2qdQe4z8xdP+jNXCOXRGFFXIt8/Cu2u5Y805o3MT9WyL21sKliQc6jMVKkkAh0PGnUU6OvcfC057okmrWZ+T9l4qgSudirdtRnK37RlGg9cl3rotsrU/WAOHtJMv3SbyKozFsK+6Y67tsz0f3WHWT1G8pWI8ku0VNhTRv2KtMj+YqfdPRpeJShG1vsZqmEzO9zX+Fq3nMLaGxbXwFifdLXsPIQoKrvEUsHqMSVBJC5Te4a+cX4gHlKr+Cran6OPp0/vR+Cran6Ov+pT+9Kq+MdWOVo7SwvTlmRbNpbXDZmqedcDRgVcE2Bs2oN9TcnuMgGo78VLBSKZCkm3WY8AnAHl39bnNL8FW1f0df9Sn96PwVbU/Rx/qU/vTEtDU78EbkILXGqkjW4IPfJPo7lNZVYXIzZe9rHQ+Bnn8FW1P0df9Sn96ffwVbU/Rx/qU/vSyM8ruiDi2WzaPSBMGm6o5WxRAF9GSjpa/6z24Dle57Dz3FYgXZnfrEkksbsWJuSeZN5Lfgq2nzoD6dL78ldl+RrGuw3r0aS9tzUf6KafzTtSo5u7Cg+Cg1azVWFOmrEsQAFBLuTwAA+qd08lnQxls9ZRpYVLaqoXVcKp+drZnPAkAcpO9DfJjhcIA4zM7DWs9t6ynkttKYN+WvfL/AEKKooRFCqosFGgAle5LSPyZIiJ0gIiIAiIgCIiAIiIAiIgCIiAIiIAiIgGCqvXX9lvrWVvpctdq2Gp0XyBlqs7ZUY9U0wB1wbDrnh3S1MoPGaG0KQzI3MBhxPA5SfqEjLYuou00VRNk1+eIcn9mn92ZPiyt+ff6NP7snolVjd1HwV9tkVSbms9/Un3Y+Kav55/Yn3ZYIjKOqyB+LK359/o0/ux8WVvz7/Rp/dk9EWHU9iuV8BiEVmWu1wCdUpEG2ouCst+HY7lHZcp3YJX0TluV8OEj8R5jeo/VJkUha3uJNvZJwRmxEr20PtJbKB2AD2T3ESwyCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCae0eC+M3Jp7T81T+t/Qzj2J0/UjRieM8Z5WbrHuJ4zxngWPcTxnjPAsKvmn1SdkDe5UdrKPawk9JRM2I7CIiTM4iIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAmPEUQ65T7RymSIBofFg9JvdHxYPSb3TficsifUlyaHxYPSb3R8WD0m9034iyHUlyaHxYPSb3T58Vj0m90kIiyHUlyaVLZyhg2YmxvbTjym7ETpFyb3EREHBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREA//2Q==',
      tags: ['HTML', 'Tailwind CSS', 'Javascript'],
      category: 'frontend',
      github: 'https://github.com/sinaf1997/javascript-project',
      demo: null
    },
    {
      id: 2,
      title: 'Monastery Travel Website',
      description: 'Full-featured tourism platform with booking system, seat selection, and payment integration.',
      image: 'https://visitmeteora.travel/wp-content/uploads/2021/11/AdobeStock_324851012-1024x480.jpeg?x94138',
      tags: ['React', 'Node.js', 'MongoDB'],
      category: 'fullstack',
      github: null,
      demo: null
    },
    {
      id: 3,
      title: 'Food Delivery website',
      description: 'A responsive food delivery website focused on modern design and smooth user experience.',
      image: 'https://static.vecteezy.com/system/resources/previews/002/001/840/non_2x/food-delivery-service-design-vector.jpg',
      tags: ['React', 'API', 'Framer Motion'],
      category: 'fullstack',
      github: 'https://github.com/sinaf1997/web-project-',
      demo: null
    },
    {
      id: 4,
      title: 'Graphics',
      description: 'A creative graphics animation project focused on modern visual effects and smooth interactive design.',
      image: 'https://www.animate2explain.com/wp-content/uploads/2018/01/Motion-Graphics-1024x1024.png',
      tags: ['SVG Animation', 'Cinema 4D', 'Three.js'],
      category: 'graphics',
      github: 'https://github.com/sinaf1997/graphics',
      demo: null
    }
  ];

  const categories = ['all', 'frontend', 'fullstack', 'graphics'];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-8" />

          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  filter === cat
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                    : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group rounded-2xl overflow-hidden bg-gray-50 dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all"
                        aria-label={`${project.title} GitHub repository`}
                      >
                        <FiGithub className="w-5 h-5 text-white" />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all"
                        aria-label={`${project.title} live demo`}
                      >
                        <FiExternalLink className="w-5 h-5 text-white" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
