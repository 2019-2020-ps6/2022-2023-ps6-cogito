import { Correcting } from "../models/correcting.model";

export const  CORR_QUESTION_INS: Correcting = {
    id: 0,
    description: "Description",
    picture: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Aristotle_latin_manuscript.jpg"
}

export const  CORR_QUESTION_FOOT1: Correcting = {
    id: 10,
    description: "C'est la France qui a gagné la coupe du monde de football en 2018",
    picture: "https://assets-fr.imgfoot.com/fra-ang-cdm-img1.jpg"
}

export const  CORR_QUESTION_FOOT2: Correcting = {
    id: 11,
    description: "C'est l'Allemagne qui a gagné la coupe du monde de football en 2014",
    picture: "https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(1206x424:1208x422)/origin-imgresizer.eurosport.com/2022/11/23/3495500-71257168-2560-1440.jpg"
}

export const  CORR_QUESTION_FOOT3: Correcting = {
    id: 12,
    description: "C'est l'Espagne qui a gagné la coupe du monde de football en 2010",
    picture: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFhUXGCAYGRgXGSAeIBsfIh0fGxsfHx8hICggHx8mICAaITEhJSkrLi4uGyAzODMtNygtLisBCgoKDg0OGxAQGzAmICYtLzAyNTUtLS0tLS0tLS0tLS8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKQBNAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAFBgMEBwACAf/EAEIQAAIBAgQEBAMFBgUDAwUAAAECEQMhAAQSMQUGQVETImFxMoGRFEJSobEHI8HR4fAVYoKS8SQzclOywhZDk6Li/8QAGwEAAgMBAQEAAAAAAAAAAAAAAwQBAgUGAAf/xABAEQABAgQEAgkCAwYEBwEAAAABAhEAAyExBBJBUWFxBRMigZGhscHwMtEU4fEGFSMzQlI0Q2JyNVRjgpKy0hb/2gAMAwEAAhEDEQA/AM0zHLdRT+789gdW0HfDFyzR0vVOaDQ66VHxRPxNPQ+uDdfm3LswJorIIYHv/wCUC/tj1leb6CT+5Qy2u4NvQWxCBi5jKEkj/tWW3EaX4fABDGbXjMlP45WtCTlODlK+pabFFaVDX1R8J+drYscU4Q9V/F8OXLSyCwvcj5Ya6HONJdX7tIZ9ZBXp+EHoMSUud0knwUYQYGnaYjrf+M4CZOJSc6pZGn0r3bfcjyhjqsCRlTMBb/qS9n/tO3g8KDZXMagwpQQuky+oH+QxJmOXXJV1LKCF1CIBIucM3EOa6TrofL+GbAHSVII6+ojFZuYqTU1pBW1TG3znApqsawySnT3hqVufjiCSsN0ckgmYxdvqRZ3egDl4rDgwqM+lZLwEGkSfTexPfAGlybmw3mokqDcQfpMYYE4r4cVVWoNN9QG3QHDTledE00QyZh3cxIYQx9sHwypyQQZWXjU737R2LcBA8bJwxUCibnG2YU3P02NHrdtLJH/03XTzPS0qbCRp9QPWMWqCVKdJtQDBUOlVFwffF3nHmR2eyVF0KWC1Lwdre/fFGpzE1Gga1M6KjIQpgGCRB398LmXOUpkS3G9XqL0NmrDSjIErrVryrIcVDEp4t9QNKmwis3Nb6VWpSIC2BkbeuLQ5zMXaoCBYSem3S2ETh/D6lVtIOkROpjAj3wT4lweorpSVXDm0zZhvM48MPh0HKBXgVfeE04/GqllTpYWdIrycVLw9cB5yp1UNOqGVgI1G84s5bP0CopvUQqjSJBuPXucZVVyVamgqkMASVBvYjviNs7Va3iHCi+ikEqKFMDf4QTFZeNk5P4yVZuDMe42jVqfFsplwUSrvewJM9bm2Bef5uQgKi1W1HUZgBuxwNbKUWyZpkNqEEGbzPc9D6YF8RyLV3RcvT0qlOZntuWP6YHIwEnOFEqJq9W9N4bnGdhQVoSAzMSQq7NSgo96ww1eY6lVFopQffpE+2CfPXA3q1AaRVS9NGaTBBFrR6YQ+C/aMvWp1kqqlSmwYSwMdyZldp3ONJ5m44jMlSdQKCWBW5vOxjGkmR1AIkpckhg5r5iFJE5WOmtPPZSFKJAFKVNjCvwblYUyWroKsEEXF/e+LHMfKtV0pOKSJJYh/h1DoD3IwyZKrQGU+2uHfw64TRIuDA29ziXi/PVGqnhNQqf5Yix2H/GHBKxaUErQAbNW9yD2vSkBIwBmgS1KKXqX00Kab78nrCxVo1iKaNTUqANYgXI2i22POdy5qsz1FGpiPMIkAW3PfBmtxeglPw3r1A7mSsAlCbATqEKIuPX3gk3E8nUo+J41TyJK1EIv906kuQQR1HXGDmnsP4QYDdVGqzB3JNKivhGh12HSojKSTT6hy1ls3K2msJ1Pgghm1S1zvbTOx9Me6lNiKa+HS0oI3G/fBXj/MtN1XwVI0CGYrvPT3xd4RzRSdVQZcs0eXTTUz/XEHFYpSApMh3cM5fyN9eVYsUyEgghQrqpItxUlm+Ews5fgKNSZp01VaUAaQBHebX6YhSjmASrHWjhVYl50wbmNtpicW63EKlTMq6poam5DoUA37jawwNPFmzBamqlQzNcAXHUW9MNpnTge1LDXLlVPEvasLjD4RZFVAm3aR4USfhhl5g4IjUxVo/vWqgCIC6ApgfIjASnwLMKqKZKsTqU9J6evtiOnxSp4NKmHt/wBty1tBny36SMFaPOA+0J4oRlpJpWBILC2qcFkJmE5EoD8HtYa38ztF5xw4QAuYWc6pFWsezbjaKuR4C+vTULCmCxQAC/vfbE68OSnXNRsuK1MrpQTGg/zwL4jzVWqV/tApjw5amoj4dUAn3xPxWo9HMCnBRGA0jvP/AMsGMtaZRWAKFuJd7+8AAkTJ3VkqrxDcG7Ipx9YjfhlUuGRWVQbqCNo7zM++LHMGTdijimysoCkfl072xJmaFRaagOEf4SWdVBTdIE6ifliLO5Stq8QPoQgQwbUDFzBB36wYOB4mWJagUsaGxO5Fb3DHvbSC4NUqacozZnoC3A2AFnL8ngXmuXqzEEqw97keg/PBDg1PN0UqU6dMinUWJgTY737jFzmXiDLToaC7ESQ47R1GOyHGno0v30mO28ESD7dMLpxKlIBCXel1O/jB14DDpmALUQdRT2GvwiFurwesazinSbQ0SN+s2/PBRuXq3iBU8YUzbUyyR12G4xBw3ib087TqhaioCWKqS3lYHYYfz+0GgUOlqgf7pKj+WNNCFzEVQ9NiT4veMtXVS5pyTGBP9yQPNJLfKQk8Hymay1c1ApInzCPi+XTByvzlTSq0jSwN10EgY+VeZKTMWLsSTJ8pwtZfhQzueqEsEp6fE833gIEfM4W6iY4M2WUjQ29ocmTpMhBMiYlRJqHzAPexeGN+dqJMyP8A8X9MdhJ5h5eq0KxSn50IDKy7Qeny2x9xfq5e58fyhT94zh/Sn/xP3g9xnKmjoX7OAdIA8wJIO1u8zfAzLcOrHVsHUFip2t098PTcLzC5apmW8OowZfDOmyhoeTJBtNsReIyzVepTMHXqHUETpZRv9cJfjcRIlAAt3ly9uySTqQ1O+Cpw8mavtVrtyeo0oLvw4rHBaBI1Vac3ZSum5P3Y7dTO1sX+W88K+Yy/ihFVG8NTEFwAd/xX7Ym4jx7Q6MoNRKg1gqBMxt6AYgy7VDWpI1LQY1oTuADLH0vGDKmrXVYqdy9jxNoGiUEDsEd3ENte41ghzs1U5qmzpTZAAWNGSVANpB2OD/GeCZY1KbUFQutOTf7pFy3a+2KtSuSxqtTZ/IJCn4lNtcdgT+WB+Yegz0g51MBE0XJMBrBux7DBFJQcy0uFDcBtmo5ua0sBAUKYpRMYpYtlLkFiQ4ptvyEVeXuAVarVSwIUHSadQwG1XHvGGXlLgTJ42aFamrI7qFjWABbyiRA9sL3FuIAUEqAFmetp0hjIAFiyj7w3x54hkKhVCmU0DWoOlzqSYIE9NRux9cVUnDoVm33YbbauKPWJeatJDim2atR4uDWI8/p1Mtaoriow89QwyLMn3vcD1x2b4JQWmGp1GdWMCYIGqZJHT9cMFbljLeEj8QqeGoUKpDAAtcmTpJtI8xMWAt1+5vlbJ0F00s5BK6mQspMbalCgNsx6HAlywaAsaVppTzFDwi0qZMTao234HfhxaFPgOVd6Qy6qtVjd2YjStNTAF8ScWqZilUrUcz5VB0oWgCCBBX0Hf/jB3i3Dhl6U0mNbXU0qgURJW5nfT84xLxnlr7aKNWqpNOhSioEkuxtAXvedz0xOSU5z1UeL82rSoblSDTJk0ygJYZIpZi7av484Tw1SvlqtJaoBIB0OykEiwgiNJ6XtMd8JrZSopujAgxt1xqicpZFhSFPK5vVWkIXFkgxLjVYXmIMj0xXflwnL12ZVFTxWgjppJ1ADa5nD+EVh1FXWkpFG4l24wlMkz1EBAzGvD7Qs8GrvWoPRCKKinUajdFA2Hrhn5X5danXOXLivRqeE9XTIkTOg/wCUxB73wJ4TmwlDRTprUrOzlrXVAtzv3w1cl8XNJaFRwGpVQF1R5i5YQD/lF8AnAyJy5aRQKIfU/k/i1IbCjiZKVLUSWsbd3EAAsbawwVeH8IAYnwILaNNmGsiQoAG/WO2ErjXK2ZDtTyyTTpn92ukHUpvDN1CgiPSN8PVfNUKbFFy6+GW1uY+8BEgRDeU3INh0vibiHDPtLI4zFSiAp81Pa219tumKyO0pt+Nvgcd+8Lz+wh3+fPtrGX10aiiUK1cI+sVCALA7xbr8seKOWLVHNIHS9SzPvNoMnubCMNnG+FZRqxDv4hKQhBANQneT3ttgLy7VKvqAVUpGKhqNJRdcK5GwIi/1wBaxMnKQoEF9bEmt+NHNuMMy80uSFJYhncUOg5nx3jQ+XMmKFOhTGSAL0hUqVDHx6dUEmWJk6fTtAwM5gyj1AmY+xii7SjgsswdMEkWNgQYBO3bB7NZ01KAdHp+ba8KVBK+WXUxb8X64Wufs9mPBpUsvpZqrRqHdIYaL9ZgmSNxjxSpZKU3r5AknuDmBJKUAKO49R6wj57LPUVEyrjUJpuunysZInURHzw08EalkkT96qOVKOzsGAIEnRp9bXwDoZTMVQRWRqVR6ck6oXT18u2s7AYu8AyYylPWuVp1pTeoQJv0kWgzbEZ5KU5UzGOhGWhrXXbW1YN28RmIGlQXr9PKxPHbdl4cVJzLmmKlQ1GLxG9oJM7gr0xa4dmio8RBSp0gGXS0BvN1NjJm1sHslkfCFStrVmNMimqi0btE3kHYYtcpvlBTzGdqUtd1pr5J0gA6tIMAFmDEn2Hpi6hJnIObtfDenh37x6cVoLZQk2YPS2jvpUEv5iFbiyU80fASsjVS0KBALNOkwQdPsev0wI5g5cq5Nl8QFBpB8w6mZAPWOvvjWs59lq6aKZVlZ6YrK601XTYsl5nVKxAB9d8J/MfGa2Z1UKhlg2pVjUOojaVI6zh3AT0ImoBLWHAM32A+GM/EyFqQopq1fnnCZyhksxXfwqZPhknX6gbm/XBjmrL1alcUn1MRdbRAFhPrtiLgvGXygZFCByR5j+Em4Hbvhu4rTNavTamYJCgHSATaS2rYrPfFcdLGHmMSAu1dXgmCUqehQZ0M54fOF+LQYynBeGCnQpV6A8dqOtppuXsstLAQIHSemA3HKGSTJVKmSR2puy6p1jSQwLN5xqA06pPrhm4hzQbJTWmlQKSS5BAUtpXTYlpvcC0HAzivMNN6BpZhfLJoP4bDSWMlZIAElZ6CNQwgqaDUV5a/rDUtCksRQjyMJGW5dJR6wqq9MOBpL3CsYsD745+CmjTdgTUSoxWnHmiPiBPUYtZ/PZZk8GnQdCkBVm+8+Ydb7HBXl7IvUrTqajSvsw/d1AB5oO0jpiwV1mhTzIqHccHbblBVZpDTFsoueNWYgkPR9/CkDOAcytRrhKghlGhiaYINMWWCLiJJnFQ5b99Wy1N9IfzoxUGDub9JtEd8WHIFWpRqTWYVCPGJAld4taD1xSyWeUVdFdQKgcorUgSzSARJ6gCMWWs5VMqoDAXc7/NLcRy5SCoKmCiquGDd3HRtYly5enUYPoVZC6dOqTH1v/HFHO5erQZK6pp1r4VuhNre4+mPmfqKrPSp06hqBgZYmdcwCB64KcSo0vs1LVVlfEvuTSYgGGA9R+eF6yVJKyxNN3voNTW/vDGaTMCkAPY103qa6W11tA3P0k1nxmqK0CBvaBEmbne+OwOr5hKrs1ZmRgdIC7aQABvfvjsPCQoh858BGacQlNOr8zDsmerVaD6qj+DIgSJGkAK3quxnrio+SpfZlGsmj4gQPcBiPiaTsCZW2NOp8rZd9NRPFgxpISLDYG1x6Yg45lKNHLnLanJEFUZABBN4t74zV9elOdZoOILjnvsdSWjTTLzzMsu5p9KgzMNtGq8Z1y9k1dFZjppl2VPNp0ESWX11DriDj1SouYdkr2WkYBJ2AW3cT39MN1PgNKnRSqFUkP4gU3GraYwy8H5e+0Ka1XSmpYXSoBPYt3Hpj0pcufMzIclm0pd68Xi68MZEsqUoMCwvd/wC1q8acdIzrgpKCmTWIqPTIYPPki6e4Mk49VuFgUKr0ToqeMsuPvHowXoJO2GLK8JoLX05pCoWbiZnp6xhppcoZXSAPFgnUDAn674sHnKzyqMah68HDmmndvFpuHRIYTDQto6eLMBpppGfcBoI7VMtXSKiL5agnzt1jsNsfKNI5I/vGLTMqZJEwEbTsTNsMvFP8Ly1ZBVLtVVoMqTEx8RGwG+82wvcw8XXxgwqq9Nm0uE07K0wXiYJJ8wIH/bIhWYAqkTQQpgBWwe+rmlPXzCEofKMynD1cWrzZmND+Tfn83TelTpNQWqhVWhxOlWXX1iTaL9/TAyvxagtXxjlwtd1AUzdgttJkCRAFwLzGB/GuLpVbXSqmnUACIyrIuYKshBsPw7j0xQ4tVpfC6pVddMPUWAGuNkgKR0Ate974qFhXZfxpS3GPSMLMmHKBx+CkQ8w8wF81QqIGVSfDZbW3BJXoZ2xcz/M9bIrrXzIXAINibGwPymPfvhV41xipSV0TSPMKrAAGBIUkHcHYz74WUzlesdDNqUtqmbTGkEm8Wx6RhkgBQNA4+GltOEMYiWuSnqCAcxBDOWHvYvXcPaNd4NzXUqL4isrgwqqAwYNEkSVGvqSZtGBCZeqE8Zld6ml4VT5HqMx1MfaZjAjgVVKWXeklOKrkozaSCBFwvU+4tt1xH/imby2XeklVzEsdZJkSZubg+qkXAxeXOCFMOFxp42Po0RL6MXNSVtZ9WJYaBiTU0sKGrtEvLOQyuSNNs64Hiq61FYElB0YAXPb5+hxPw3mbKrVFCkrnLioHVqukMpF7QTCkgbmwN4wm8X4gczUNRraiSBPw6iW+e+CXLHAWqF3pp4hQajbYKLn+u5w1i8UMpUuw8OX6wHAdHEzB2gARU7Uvzeg9oe34N4tVTTrkUHLFlAWRO6hiNag7FdxtaMXX4nl8ua9Fi51sGlN7aUAXoNMMYP4W31YRaig6dU+U2gkW/CYIle3UdCMMXA+BfalqMWgjsLbCLWsNgNgAMIKnAAF39u96+Uan7m6glWJLIGoNTWmlPPaBPHuLZc0VoCVdGDKYu95379zOAPC6TEGprYB5hAfKRN5Gxx65loxSdYB0MCD84tglypQolafjO6pEkj4vYdB7nF14lSZOYX8TT5aGUdHYdGLUlaMyQnPYkkktYXN7MK2DQ38M5joDJmjXVSEnT4g1LdiwB2je220dLxcycymqKS5fyhSHDAC/lIEKRYGQR3ibDSWV64ALBTKyR7ibW9YBg4M8pFPHPiXm4JudUiIn57XwA4gjtB3+efwCLzOhpcpSpx7SA5ytvpU27na5geeK1H1LWdyrRMHSbXBF4H0jHxOHNWYt45NGkQPihpY/eGwPtbqMS8yrTWuwSAgjaIAgatrb4ScpxapTrGqkXOzCQR90EdcMYZaluFM3IXhXpbC4dEqXMlAoUdnoGex2JG2saZwfNJmcz4OlFy9MaWqzcH7uk+sfnhsynEVyqvSMmmJAI9Z0Kbdb3/zDtdQo800vBXVkKQrWBIaU23K7z6avni3wTmRWNRK6KUqAWC2gSTa5PS1zA9LlmTUrLuH4Pbw590ZR6JxEmSqYsKa5dt7/AFE8bb8oYKXH2QuHIIMhdNrCD0AkQSdXoffGZZPMVUz9F0bxKlVmLoVgLLG0ncRf5YauE53I0KddqSq+skGCdjsuq5CmNlvawtYTwnjdVawX92yu1/FaXltnLH4Qv4QY0iB3I8xSSlYrxcbac/GBSsPOmgzJP0i5FtXqb8oB8x5GK9RFAGl50n1vvgjyXnq5qOKeXNZyq00USQgk6i3RRHW22H+jkqTsKoo2LTBuSsnQx6jWo1AG4BGGXgOWorUbwqYpKbx1LG5np8Ki3YnabvY3pTrJCAZbrol3oeIpwe/rCKcJ+FWZiFuCfpZm/wBJ7TnwhWz/ACtNCjTzAHjaydVNiCim+gERqEjY9++J6/JyvlPszImjVqAUlSOuoXu5/wAxjuTh6rUgWmLjriDWpnHI9IYyemsohITrvyAsN6VNqO90zi1uMZJxvkeolJRRjxEMqX+Jhs0nZm6iD274rcP4RVYV18Umm4Ea4ktHUdBjVs5RFVSkwe/YiJ+oMezHFCvkaNNl8SkamtApKiPMCLntuD9cN9D9L/iFiXPDqr6PxYXLCni8FYKBysFHhSm1qt6Qq8vcFYiKVCjq0QVJ6wZI33OFx1yy+Ma9MZdxcGmTIZbGP6Y2LL8KpK2pUZWjcMOuFziXD6FVwoosFPxalmTO+OimzpqUuHOm7jwimHwsmYSCzUL2Yjv1bvMZu/FXK5eqvUlC+kaiIIBv2PXFrlTl6tQq1jVVK1Fllw95PQx3/nhzr8DpM1IrYrVKwTpCgRBCx5upwe4vwhAgZCSCRr9SNjb6Wx4IH4btILmrvW7jR6HSsDURNxWVCwAKNlYWY6m9hbvvGH1uL1kOlsrTgTp8hssmB+uOxtlHheUKgmgS0XPc9cdgiZkxg6R4H7RKsMgEh1eA/wDqFzKZaq3CEq02qtW8QiUdydIJGwO2GDmXhlIZHWtPXWamoDEsXkwJG/eb4C8Mz75en4VGsyJJMQDvvcgnE/8AjNbQE+0PpAAiB09YnC/71kbHwH3jIE9q1dvmrxfHIq6coGd7GK/mPmkah1t5vLbocFzwhGNEil4SJVKlfEYalAZVkCxk6W9sKr8RqHVOYqnXBPm7bR+H5Rjs3xOpUCh69QhSGEGLjY2ifnio6Uk7HwH3ixxD3fxg9k+XqJINalLNmqgBckkoA+kXN1gD6YC880zTrUVoq6IqMx8MvcL0I2t6dCceK3E6jsjtWcshlT2MQTEQTEi/fEGe5oVCPGepUYiFICwBMtvAJJCiO04snpGXMOVL1B0txvDOEKp81KEpKmqz3bTvoIzgszMWqXM2B+93b+X+7rj41RWsSr+mKnGOJ+fxT99i/wD5A/H/AOJBN1OCnCc+KbrUCrU0mVJBj0NiNsZ09S1dsjlp6x9OwhloSqVLAKgKjd+NL7tZjrWvXSVAU6CI0ldx6HuI26i0GLYL8C4cKwYSfKLEm/qZ6kxefxE+0NTL1Mx41fSAFILkDSJZogDuTJj3xYTLnLOoqNAqU1chb2Pwgzad7j+Ywuue6Oreu16s/fQ+cCVIkoUpUkBM0jQk7KIAFLNYbcoWeLEB1psFNjP6D+OCOZWhUVFp5dVK2JMNM7fdF57d46DCrxTM6sxUaTGqBO8C388NvJddvtWX0rfxE6TbV5j8hJnpE9MMYlJkys40BN20eE5WLROnTVKH0u3Fg1fDXem8eOG0npuKgDFRGpSdQjqATtItcnBLnGm9RSVQgmkbRv3gbk9PW2GWhTqilAFQUl+0isAWA1eHpQP0mY+K+EqnxQIaixLMrIjSJVrQwHWIttgHR6xicQFKT2U3Y1IL0ewNAdaEHWA4/HJlyVzEEBeUhId3ckWDMzPtUCmqQjxCn2w2cAzL06ZNNypY+aGPTawOAWUyiOzifhWwNiSWCL8gWDT2HrghwlWBq0z0O/8AfyONHFJdDGFehFJVPYjMmw4Fn8WHnDlwfgArUTWZ6qgPpinRNT7uqT5gQPcYi4HxUUA4LspI2ADT9SCPeYxPy3xWhlwGYVjVVwyhWARgsQGBvvMn2wunf3OMaV1pmTAp2fs2G7s19KmOn6tc4zETfpcNQeW+l4p0+LoucpCqB4NOtTNWTciRJHsCT8sEc5p8R9HweJU0x+EVmj8owI43wV0rWWfFVagJgWIvc2EGR9MGeF8IcUUUGWCk2m41ajDRpsLm+NiZ2pCUoFHfyjm8Di5Y6RmYidMFUlIelAuia7V73gtytwpaxdmDOEE+GCA1QkmBuIFrneNr4j45mDQzlfQqqFdwBpGmAxto2iwwKOqm3UH16dRj5mswzuzudTMS09ybk4yeqUZxWS6WZtrfnpHSmQpU0qUp0kM3hzBdiXoas9ou8OC1601oIN2GwMDa3SYxe4rwHJ6S9NYZSNKhjE77Gek/TAzJ8TpZZTUqqzBiVAABv5T1IGwOKPMXM1OsE+zqyxBabfinb0j6438LPlpwqpQluouyqMHpzoNo47pNExfTKCVFMpATQE1Z1M1qlhUNHlsyS/h00Z3tOm8T7dcXxRqqAzUK1PbS2ggTNvbuD6e2Gv8AZ9ryWWD1aNQtUcSEWSJVQpN52It0vhp4nnDVdsv4VQaV1l2A0EbgSCfw/LCYRLbK3f77Rab0xjDO6wLZP9rBm2NHqLm+zRlmQZfEUMBoDyRsJJGr6gXPpg5zdw6jTFNqVtViLjYLFv73vjzzZSpp4FSkiAsDOjUAWVjqGlyTAsL79hgc2bGZZEZVpD4dSLB3ibkiB22xnS19YAuove9C1b7R0xnFWXEIcISFOLWfTdx+kFOS83FU02bTrUopJst1AO/ZQPoMNHFOe8lkjUVVNWp4koq3hdCDUWvpBEmNyOmMd8Wpl3ekWDaWkOpkHqSP5dDOGXhHL9LNq1etmhSeq0KIQCQexuw38toj2xqFjKEqYaBRI4uPK7ve8ch0qiViJycXJDZkgEWIIJPgQwttGo8vc40s1KqpVyLXkHfY27H+4wUpWViBp9/bGd8B5fo5atTqUsx41SnUAqaGAVVLAGVG2/0w/cUq+SAfigSOxmD8zAxyfTkhKJktMt8pHvW9a0NTGclKhQwP5fzDM7q26m/tCifyGCvMuU/6aoyt5kGsfK5HzE/ljNuZOOvkq9GupMO+ioP9DKfeDocf+Iw4ZNVIFLxajknzM9ViT3vYD2ED0w90VJVJnpxSUpNsrlQYiihQgEHV3oaUicRhxOQpBNCPnhCaOZm6tjl5pPcYMNwLL/8ApjHw8v5f8GPoZ/aDD6ST4iOOGAXqqA7c1EbkY9jmmwh5m/t6YIPy7QP3R9MfG5epdhb0xQ/tDIf+QfFMSMCpr+cDjzO34sdi9/8AT9Psv0x2J/8A0Uj/AJdXimK/gVf3fPCK6D+5xIFPb88QhTj5pOPn+ciNFosL7fnj7A7fniHQe2PhUnHs5iYtKoPf64TuL8QSo7OsaE8gIMxHf/d8ow6ZbLyCItscJGeyBpVmpafLtB7dCvyjpsd5BxpYUNLWXq3lr4x0n7LoQcXUOdNW1duBA5XhW4zWLVSvRQPzAJ/h/twey3CWTLI1Ms9R5cKAfInciCb99sUeM5JiyFVOu6Qo6DSR7QPyxqHKz/Zsqldi5phFuF1tsdW1yB6gW9cPJWnIKRo9JJnS50ztVKrjYhwHB2Ya2fWM8yvGqqI8qrAjS0C+nUHO1raQetsG+PV6Tmh4TagtFUJ0kXEzvvMzOHqpxKiyKqBj44LUyKRGroSWIED3I2xmqhNQCsCJ0j26X64RxCUrWJgSxr3vSvcGo0af7P5syhMUTltrejb6UrCglCajzZtRkH3wZyT6TG2GjM8lVDUatUq00NWoWVUBYAudUAkiwufbvhfr0kRiBURrwI3J9YnDM1eeia+Me6KyJGckA3NaefGnHygjwwuXOgajEqImTBifT16Yq8wcu5wVNb0KhUgXQEqSQdoIM9IibD5zcC4mKVdGENpMkAgQIOob6vhn7uNQ4hk8qa6ZmqXDj4lRmgwACCq3IFrD/mZWeWK67wn04qXPnJILgJ9z3coyXLct5im/jtSNNNiWt93UTf7oMA+vtilwyoWd3H/b+ETuzd/n/e2NC5noZfL5UrRBqfaGuWcs0CSR1PTTfpMnCPl2prZQFvOm3zO5OPTM8wHswboYS5bFSgACTrsAK2bvc7RZx8Xce+CTcEraBUCFkIkMtwQbza+BxU9jhCOwlzpcyqFA8i8MnFkr1glGjS8RlyyMD5ZAJIPxbiREDt7YHZXl3iROgUDTQDUYN5Ajc2+Xt6YeOTc1SrZZ6BZ9SIocr5YBLFQGkGYHtb1OLVHhWWIy666reDNvEmS17383+n540ErIQADpHzSfIEufMSoWUr1JjOeJ5vxVpsy6HggrMxBII2tBBH9jA04Z+NUVzeZqvRKimPxMq+pMG9yTsPe5x5yvJ1Wp8NSl6+f6nvGFJpdZe8dpgMTIw+Fly1rAOUXPz8oXxwds0hAdUFM6yW2tb+OCnKXK+XWqalSp4gokfd0qTczvJCwT029MVc3mKVNPCpv5zd2ETMsFAB9ADHcjtYQrBHVl1mopkebbpcCARuIiIJHXBpbgZST4fDGbjsCvEzVTgWBoxpYsTQEl2oCLGz21jgvFG89NbBSq62UgGZIBm8x5Z7iLbY9cR4tWoUarM+uKbOBCyNM3IHluIUDrHzCRwjjxo6hV89PQEIifhB6dbEk94Y4qUuPUvs5pZemAGJ1W3JO0xfy2PYf6QYBLUBaldPnCMmfg1Sp3Uls1GG/LePfMHFhUgs9MKhKqNApxeWIUCDJuSCcCq+YK02ZSPh8p1RuYsfa+APFk1ObsI6tHzPfFBcoxIABM2AF59AN8Fl4WUAMlANI0ZvSU+RLVhzLBDZXBZnoTbd4P06VKrdagUx5twAesWg97d8PvKnHMsaOhwtSpltIQxcn4V0QTcDSL9fTCDw7Ksko6umq66i6X/LBDh+XCHUshg2oEMZB2PxW272xC1SxSsAl9HTJ2H65KhYlg+lWs9rVjR345S11FGX8KrUYeWCpfUTuwF9idQuOu16HDue6btorqFMeGDT8oImRAZiNQtA1dTYYR8txkCrrep4lRdWkgMAgIMkgkmRO29guA/DUDVy4tAZzfaT3EHrgc3DSpxeaLWd9faguISwsnrFZcuZ+Nu8Hv7o1/jXAKOcNOqXLU0YNERFjIcHp7WMG+K2f5gUt4dAa2+8+yr7x+mEzJcYKRSJbw2gMJuJ+EiIn5b7b4Z1oIB5Y07iNsLz0jDpShAcaVLDxMKdI5sKkFIuSK6ECx3PhYuIvf4i03YH5Y9rxPvGBvhDvjyaa98KdfNjnK3go3FFxw4mnrgUaa98eSg74n8RMisF/8Rp/iOPuAvhDvjsW/Er2j0WPtinZY+Zx6+2r+EfngYWx9DemA9Yr4B9oo8E/t3SF+mLVHNGOn0H8sC6CdY3xeo0wMHlmYYl4K0s2w64D8c4nSR0qsf3lM2LQRa8HqfMZtfFzMVhTTW9lvDH0iYH3jcWHf3xmvF6zO5qFpJJ6/CCSBGxneY3IiQN30JUpsxp83jpeg8E5OIXoKB2cWJU39OjUKqm15OKczO7H7uowZAmO2kWG53/24cOQeKv8AZGorHi+I6y3c3BuOxPT5Yzd4me1h/T7q+y4s5HP1ULGm37x4I7MR0PuOvQgdCcFVLTlyop8+zxtYgzJg7VhYAUHcGD8AHvfXYc5xh6VJy5gL+7AvLSCAtx5jN9VoAPzx7L0YJI0EWAvp/wDcrT88GOH52vXamldy2nzlZ2kaVgmbwSSe0Rtevxjh/haipmL2MxICnoLYgTClbPfwg2EwiBKJWKuebNtvd6aR7yvFK1LzBmYEHyn7p+G0zErA+QIxRr19pBJ9gfzYvi3mc5RGRpAT4viuavfSVhY6kC/sffFTLZqlVIpQ5kwLRBAN8WAWO0kc2t8aGRMkqGSYQk/0gmp43rmU7O97Vj1RzI9RvdnY7gg7/DYn2w0ZnnlYKnVqqETCkhtpiCCDMWn62JU6ApwylXZ5hSp69PLHXbfrj79jqggaHBOwKmT3jAyxNSX5/rSAT5ImtQAjh7Ajx8Xg9xfixzTBtNgJAF/TVboJjt77kT9oUNEOT93SzD/5DE3Dc4i0zrF5J39rR12OBjcVl2ZfLJiAqt+emcHwuEmzyQgsBuSBwsDEzsfhOj5aQtLvskFR3NSBdtaUYFoNZHi2dyqjRUDIo8ymbXJPW+8WjYWwv8W5hq5isKphYPlVRb59WPrv7YsrWfMTSB1atxCifvbgDFKlloPmsZiT07/XBF4c4dTTWKuGzkeoOkZ+eVilheDzJTYvd6FrncG5BN2Aht5E459naqajQHA1EdDqOknpHmIO+4MxOHTiHOFKkKjzTJGwQGWIBIvJt3PQA9jjLMpRKuGALpOgsRIuCIPoRY+jeuPmUydNC8ebUGCzAheonqTYT2m18KqyqLv3Nf7QZeBmKPZTQ0Je1q8e7XnT4Kj03psrGQnnN5HlMz9D/I4IZTiTo3jU6opuVhibqQY6E6VO3XzfXHnj1JKbDTYvOxmBdve5J74kyXBKlTKZiuF00wsy1gTqUwvuenqcEQeuyg60fnf5+sNTRLlpmENlAJKS7OzAbgksKF3URV2ixy9wvL1sxpqOX1ljpFgTEza4EA2nHcw0hlczGj900EBTG8EiTMX/ACtgXy1XFPMUr3Dj6GVYD/STg9+0RdTG3waSPaL/AK4LjcN+HmplkuCNd67coyejcZNxeKVNQMoEtVAS3ZKdyakG/GB+azlJ2LUfKLeUm4MX6mRM/XHrIhC0Mogg7Ae/T64r5dytC2hyVgABJSTuSfPq9vri3xrOFEUGgq1NQJemhCix8skwx6yNot3xmWUECztetOdT8Z46ROMOQAguBf5WsD+P01aqioBLSR9f6HAzL1jTfVHmW3sw2PyN8S8PrzX1OyrAbe0tt/f/AI48V6oqOzMYQsB8hYH6Xw6hJDJNmjOm5FS871KiGpYDXbblGn1yrqVdQynof7sf0wD4pw9aVLUKZGtyVqTItujLEAwZnc79wGl1BFtsB+P8yUqWXbKVaLkkeIlRCCVa8eQxYab+a4JGMpMqcFDLUPUWpvxbbWOW6Cxq8NPYPkNSA+mo4geNjCdUpA6iVALXLCb+/wCv54vcX4XQpI1Sm0FlK6R0DNBHykG+IsrxoOVqHVq0Gm4gG19BM7xYECJA+oniuZDN5TbtpgA9YFzHvh5AmFTKp3v3eVOEdlNmpYLQkDZmrxoB961ifhQqV6iJTpktsIi1gT9Yxo1fhgy9GmjVFasblBcKLBfzk+smLLJz7g7mmVOvQAdQcMVvHrB9LYcOCUiVbxAGer8NQmfNuBJ6P3+vTFMQpGUpAqaD5vCPSspczClMxTuMzZalQBA7VmFLOTZwGiU1PTHxnPbEGo4+Bj3xkZlbxwDxJ4npjyavpiNgemOE4vmO8erHs1fTH3EOg47E5jvER7KnE1GjN8Q03k2X+WC1Cj6fLF0IKjEPHujlSMT+DFicfdNsfSCLQMPJSQKRMLnPtTVoIcgq2mko2AJiJ6HrOF7ivDzlUStW87F7gXWPMxBkfEZaO0del7nxG9e/9/PFXm3iYrU8us2Kqzx3KyT8jGH+jpC56wOJfgP1p+VuqnY9cmUgpPYKbcWoBaxcn/aYHcVqIay1kh0q+aDtq6ztHfHkZjxKgLaUm3lUxtGwkydrf1wCGYKEiR6gX+focTUOMlCGUEMNiG+WCTsIpBIFfXv2h+R0rIX2j2TyJD8DcjUPvBwUvBqgatRIk2gjeVO8GNx64gzXHwzOVGq0Cdtr+Xe59egwDznFnqC5PuSScScGyD1BVZSoWlT1vqaLTFu5mAB3IHXEyMOh3nV+d3tAsR0wtKQjDFq1U1eVQe8s9maLZpO9MmJ0IST2Hrj7wXOJTpsT/wBxpEyZiO20SMEeLVPAyKqBDVjB76Rc/wAB88KZqx0GKyP4kpWgJbmB+bwGbiRJxKVCpSNd/wAhBnh9UagWJiZMGD8vXB1uKKrq66itMGEjSb9zLFu5J7D5JyZ0jp+eJDxH0P1xSZhisufjw1J6SlJQxNeRi5UzIDKbjSZv6emPWYreIxqRGozH8sCnzROwAxYp1R4fx+abrHpaDt8saeBAlzCTs3mIyOkMT1ycoOr24Ec7fDRr/Bq4Stuu0eYEgkiIMeuLXFMpVAd2SLknsDPvO+AXC6umtTbs4MexB/hhp51zpY6tXlqENb5iPqMI4uYVYhLa+xeHMAsIwqwQKa61GvIxT4a7OUVyVXUB1MTu0fXF3iuUFHQRqBeZVmBIAIgysb9vTADL5xQPiiMSnOAyQZ7k/wBcLmUsrcWjVRipXVh1+YeDX2LxlR2t5iAekAD8zJv/AJcFeaeL5hctRpM4FNp0quwVYgx1a/WYwv0uJKwp0wznST7X+K3fFvnzMLoypQeXS4Wd4lYxeTmRiUJmUTUtyFPOvdC2PxCeoUqSUk0qGLEhixIoWJFN7xf5WylM5XMVSV1lWRQWAaKaiuSonUxYhdhYI04D5zmF6zu1SCWPTYCIK/TAvIZ0ec7NoIUkwAT5STcH4SYAm8TYHAxazCw/TDOIwxVNXMJcKLijMWApUvQJD0qLO5OP0djDhSCKEON6Fn8WHgILmJtbtOPLnFEZhwLpbHg5z0wMyFi4jS/eEoihi1MyDJkWgxBkQdsWjlqlVky9IambpIG1zJNgIBMnoDijknJJbTYYs19VLMqyVFtpZX2WYBIO8wZBF5+eLMXZ7Od68vWFZswdWVJuqnc+8bFlvhWd4E+8XwiftJAFSmZ3QfkXw55eoHUOpMMNQmxg7T64Tf2j5Ul6A7o0n2K/zGEcIlS5oS1TpxjDw0wSZxOgzQo5TMkGVIPdT1wTrcPdoI0rI1QWZgP/ANfLiqOHgiMS5asyMqyReAQ1vobY3JvRUwVCgOf3EbGD6akgFE5JUOBD9zt5KHK8T5fLxuUb/wAf/wCRONE4dUXw6KTfSrf6g0jGdf4jVF9Q+art0Pw4beCVyaeXqkzAefYM38sY3SGCnykJWsi+j3YnbhGoOksJiE9XJCgRWoFrXClE3gu9ASbHEfhjFtaaVVVlJhhqHzxA+RPRsYa5C0ljHELQpCihQqKREyDpjyVHXHp6ZG+ITTPfFMpisSBfQ47EJQd8djzR6CuWpgbx3nF6kb2jvP8AHEGXokxNvT5e2LgSB67WxoIQwiAHj6X2kz7bY+MwHv2/SPzx8gmd/wC9umPDUCADqJ+n54LFoGcw0VqUwSNRBuI6G39/PGc815U0mQUg3hsupZ6Xhl+R79CMbDwzJU3qEOBGgxJuSRFvSC35YHc7cvUalFUDqlYEmiDbUbSv+oAR6xhzBTFSpoOZkqoW509o15AMzCZSHILj394xGnkybtb+/pj0MiWV2S4pgFr9zAjvhhynAmetSpVAQW87KSQwQb6h93VsAb/lhwzfCKFHL1VWiqr4RLW+KAYkm5g7E3w/isRKlHIgPxvr4eELFakkZrnSMiK4J8vcPetWCoDa7EdB1nDFS5WpH7GWqaDVgMJEyw1AgH5LHtjQOXeFpk1emEDgn97WIghvujTchVG5mJM+uALxEtUolBrYfd7d0aKJC0TBmFLxm/PtCoGpEq2gKVBI+9Nx9APz7YA5Ch1I32tjYec+F/aECALqpuRIvpJWLjrYyOuxFtWMlytYQo7C/wA/+MH6LbMlDW/P3gOOH1KJqa+0Us9ShrCBj3S4XWZDUWmxUdQP0HUeoxdz2X1CRuBqAncdYneIO07YeeD5fVlaQP8A6Y/MYnpCYJMwgMYTEwplhTRm2VqlTZVJNgSAYPQibfXBzP8ABq4Zpp/u3bSrWAZgsyLyRZtrbxgCKDAgTBmIntb9bYPcGyeYqVdYpNWZSCQxLTF4YzJHzGKhAVMHaAvfyaoHi97Q+Jq0yyACaj3d6agxJxvhVDL0KNSnLPU0sGLdI1EwIHYfPEfMl8tQb/O/6Li7zLSq5mtSpsi03CMzJcBdTk2BJMRBtO+LvMPLVanw9SQGKVNbdNKkRN9wTpwpZaAo9oEvV9xex56xfDuMOsHVm7jCnwfgtTMEhAIG5JiO02P5Yh4jk2oVGpuASD/xjSuXOFHL0FRoLHzMel/4AfxwgcaziVK9VpJDNadwOg+WDpxBUs5LDx+fNYSk/wAQqe0RcGVqlZVWJufopb+GGnm/LD7NTVQSaWk1D0AcEU/zV59xibkflaaxdqhUotliZ10zcNIiA0XG89sNfOvLa/ZGqBypWmdSqTpfT5gSJiVI+ICel7QOYsLnpU9gdHu404GmymOkOoBEgoGqgb6fPtGPUssGBJ6bR8hi1SoBRYH8v4nBPlrlWtmyrU3UJqIkyYIAO3z/AFwxcw8kHKUvEq5pIgbIdyYA+KPrYY0cJiJCHCldp9j9oVnypilAJFISqiVBTNQI2jVp1RAntcnAqoL3tjS+bilHJCgABMBbdQVJ+Z8xk9ffCLlcl4usA3Sm1T5KMLfilThmNnLRSSlPV5rQQ5fpmqfDpg+VC7QJLHaANhJIEm0dsEKnLFWp4YEJU1lXDEQjBQ4uJkMhDD1BHTEnBeQ8xXpo9M0nDCfj6esiMH+DcAzGUqkVaICssCoGB0kXgaTsdoI7fMSkICVTUzEk6CjvYuSoPuzHhsWpuKmhGQpLMeVqMw4d94N5CgKVNaYadIiTuT1J+c4Wv2gERTP3gCB7E3/MLhrU+t/W2FrmPl+vmaupGTStMDzMReTPQ72+mFsAtKcQFrUzOX7jGVKSVrYBzWEBs0Rufr/zOJEz5I1FSVBjVG3zHXHcY4RUoOy1SogT5TMzthj4FwZXyjKTPinUIny2gTtcMDtbGvM6SKO0lTjxhiZICB2w0AfFUjym3btjReXeAlqFGm8jUhkTpMOWNrGDDD2nGYcOUCqqVLAOA89Bqhp9r41TgfMlR2qLXpsjJLpCEFkB8wA2LKpkAfFEAYX6RmrxEtKUixc6cA2uulrw5g5aZSiSbhvc+kTcPyrUGq5e8UzrpkmZptOm43hg69Ph2GLx9RjwlRWOoVNfUR+FvMDP3lJ1Q24ggyROLGme5+eMRTv2jX148zc6OaABozMWjLOIHD0iv4cjfFOvlSRgppkbY8usbD84wNcsG8KwE+zvjsFNY6i+OwPqhvENEiqI377D+WJk7X+Yj/gY4VI727/1x2tiO3Yz74mgi0ST2B7bR/YxXkiADacSqrdQPqf4450A6ntuf+MTFo+jMeH5juB5T6kqqj21QT/4jpMiuJccRcv++OqKCh2MXYEgxFpLbfLCzz/xNqbU0R3Uxq3I7hZBt3woZri1apSKOxKyOpjedpjf0xpowa1S0l6Gvzu9eEbmCxEtMgD+oO3GHTkqmajVc5Uu9ZiBadIBFu+8D2UYP8SoipRqIR8SMPaQYP8AfbFDkukyZSj+7UyC0n1YsLR2IxZ5krFMtXO3l07EbnTY/PC6gZmIyp1LDhpGPMUVLJjK83XECGaREXNo9z+mNjyfFmUsgXxG0gkbkqZEnvcG/tjGcxlX0htJAOxNp9p3+WG/nSpUpVKRR2QmiVJW0w23tfGjipIXNTLQd2jTGKImpUQwLuAPz3h7p5xdKlvK6xTOkyCpaFUnZjdYPRpvvK3yblaSs9YpTOmq4MqCYLEL0/ucJvC83XNWk7io6qykWYiAdxFrYY+QS/gs4v54n5A4Tnylykkvtbvh5C5cyaSLZdWu/wBvWFnm/iHi5yq/4W0L6BfLb5gnDny1X8TLUWMggFTp2sdItG2M4z9NlrVA9yHYEjvJn88aXy3ljTy1JYIOkN16+Y2+cYvjQEykgcPSMnEqzJfjCRzdSWnmWCLAIDXuZNz7X6emHT9m2cc0KhCAkNfYE2G59P44SecT/wBZVmQbA3n7ow68kcH/AOi1EkajqM9Z297BTHvi08/wEk3p6Q5hFl0gm4ibm/idOlUp1aahqjiBOylSPMQLsRNgffphd4lzNXOUrUqramqlQDEGASXMbfhHT4rDHvn7LhVy0SR+8F/dcKGZEaRNo9e/9MFw8kKlCZBZ88AmW1dC/t+fGNJoZmMirsQP+nEkzI8se2MuY40TMI/+GgTA+zqdvQHfCBlMuajqi7swUfMximEso8YzZOtdY0TjmYanl1rUmhtCo0djBB/VfXViHh3Nbik1PMEtTIMMwPlkRpIgBkbYiCRMjYQZ4llJy7o06dBtbYC3TpY/LGTn4P1xXCJE1KhtWD4XFZEZVJfarNrtGy/s0dKGQRmZQ7amg9bmB7kRi1xjNJmHHihDpghXjynpa4kDGf5LmE06VKkaS1NA8hLRY3ggAzcntbDnwnNeLQpvIEgnpAIJBuTsI6nC2IStCis2eDY15cgJZrDyfv7oT/2lVW10lkQAT8ye3yH1xX/Z5QDPX1AEeGFMjcE3HsYxH+0QxmVBJJ8MXn1b098GP2ecPIovVj42gey29BuW+mDrXlwoJ294QNJLQ25BkyhTwwEDNpgbSQTtsNsHKvElqU2WodD7qu5t7d74U+akjLFpgoy1AfUMsfO+Fp+bqhBIpoHgw6tYSIJ0kTPucLy5S5ocbkVOv6aXjQwKuslFJrp8+8PjVI6fQb4Aca5lp0nehU1AGCxAvsCIIuMHixgEze4I6fQGcZrzFnv+rrSJuI+i/TEYSWJqykgmm7awlgCEzHKmpch4Gcz56nVqg0gwQKB5tyZN9zhx5FecoP8AKzKPrP8AHGeZ2pqcnGn8q5M08rSXbUus/wCq/wCQt8sN4pIlSgjjFsYvM5d3N2by0jPuOn/q63TznDrwfmemKNIVK2lkFwVbcWEMBFxBPuRhW5myyJmqgaRJnbuoP6yMRlEWijMJ1O4B9FCb/wC7FzKROCQQbaXtGhhlFCAcwD78tfhjTuFcZpZgMaZsGvpWBJA9PT2wRTTuJk4TeSKbozrGnUuoCINiRsel+vpE4cXpsLRHf+4xnYhISs5bfNqRkY1JE9TkHla3HaPp3tB/v1xyv0/LEdRyIkx8sdUIBIlp62t8u+F3aFLx70L2J9b/AMsdjwhX8R3/AAg/37Y+485iI+U84pj1G2qT/Y9e+JGzdIRMAkevf0vhc1TEDYm219+397Y6nUYAwPKwtLfnf1G/oMWKREhoZUr0pkMsm+5E9B9MeXzKAeZvz+X13wtirNmMkQSfLt9B0v8AP2x7qae8ibQZnpPt0xGU6RLwH5ozLNVZRTLqBZpGiCATrmy3neCREEYXMvkBWqLTDqWdgAqKYAHxGYAsoO2qcWudKamoji0rpIiIIPr7jbHnk7KzVZiB5Um/qQoj6/TG3KBThs6f7dvu+o0Ah5M0CUGFeft93jTVAC+V1UCABpn1gRgJzVXpvlqoZakCPQ/ED2MY8qzKeosPYd+mKnF2LZdw22jckfXbvH0xk4VJM+WP9SfXe/hCWdi8KnCqS1MxQpK7FPE1lWUAiLm8kXAjp7Yaud6SFKLtUKFWKggFoJhukFT5Z67YA8n5UCs9Q3CqB9T0kG8A/XBbm2oGoAHVIZSsyRFxcxA3MCe/bGnNzDHJSDamj1HJrcIYVNBmClubevvAGpn5UL9opsdtRSpq20/hgmLSb+uJOXuO1KKFKSUpP3mkn/YDc/XFXgGTV8zTXcCWIAnYEj84wPpuyMywJBK+a+1tvhweZKCj1d9as3kBtq44RpYafLC+3QNVnr4v5Ec45aDVcyUJOp6hDN7t5j+pxrk04AkgWHUR02I3sB/XCHwkUjxBiKbpDtAdxYwRBBuTv1tOHHV0Uea0gEmdws/kYPr6Yz+ke0sA2/OM2coOALRnnPFOM5UO4IUg/wCkD9QcMWZz9XK1dFJ2WmFpjQQGU/u1g32PsQTitz/wOoopVzp840lAQWUzaQPxTIxS5rJXMfhOhJ/2x/c4elyioIQW+nUU/pox+0M4WehCklaXDEXqLW+zh49cZ4jWzJUMgcrMaFbyyRJgHrEXkWtgDxbLsjKHUqdEwRB3PTEmYRwULn4kDD2JMfpPzwU4nwjMZh0anSZl8Kmqt0MU1LR3gyPf1wwgFCMgZjsNm7vLzeLT5stUzOlxzPw+Zh1zuW1ZV0Qgfuo3ttA6e35+2EPkfL682n+UFvy0j8yMOfEeYPDptck6TAjY+pm3W/fCryRWalUqVAmpdMAxuZmPSQDjLlBSZKyPmhhVD5FGNEzeXJpOPxKQLH8JxnORFLwtH2eozHewafYwCO1hbe5w6DmQC3hFTNyGNrfUXtv1OEvimZqitUAdwpY+XUYEnbfBujZS1ZkDhqeIj0iYgOFP3RWOcLKFK0wVAWWIMaYE6CC0222vsbYfuUssFydPqSGMxa7EjfptFpxlInUQe5xpnBs/FGmq1T5EQEAbWv8A3tj2PT/CDan0B5xbEKoBC3+0ihpr02iJpxHsxP8AHDry3QSll6SFgpCKTtYm5n5mfrhO56y1V3otYhqUrLXIk3v02j+yWnTCjUpkCIMWMARt7i//AAnPIMhCX+CBr+hMfeb3V8tUph1EBSD0MMD0Fh0whZDJAsFek5LEAMIKmT3HWPU4cOYFIytWUhoHbqw/v63wucn8Eq1qj1VWVy6io8mIk6QR3i59Iw7gSpGFUt2ZR9E0d/vEyVDKXDxoX+KqAdIA6X+Y6SfTGecxuq5qq2jVrCsCSQNomAQdx3w1HUfjT6Gf7vOFznClJp1AsWKH5XHTe5wt0Z/iAngde/SByVZT+h9YXDQZ2Asuo2A6SY9/qcanRz2lCFUCOpt1I3m//PbCtyHQotmcstZBGpidQs0BmEHreBHpg8NQESSRY26g3FhEnv8Aricc7h9yIYxakkJa+vl+cJ3N1RnzCtE6qYNgfUfpH1xLxCgBlaDOj/FU2OmJIiQVO4Wem2HzgnL2XzFVKteuKe4UAqDJaLyOu0D+OF/9ouSFIvSBLLTrCCeo0EA2t1GDSCsGUCKGjvWoMHE1CcKhj281mDMxq+vhAzlOoNT6GcBV6sIBJ6CN7b+mGYZpgNwxG0nv3v1wtcm0vLVPqBJE7An+OGEpFmEiOo8v023thfH/AM8jl6CEJrqWS0fXzZkwNM36/l6Y6nm6k7m52m03/uf54jIUDoCT0A9wLCb+h+tsQVGRr+5jf8+v0woBA8p0iz4zdWA9L47FYLFoUfMj8ot7Y7F8pj2UxwqlRYn5kn9cfftBibHbcev1x8x2KmBiLiKNbCB19OvYW/LHpbgzeNp9sfcdiFWixha5xQeEOmlliOkgz/D6DEPJbQlduv7tb9izT+gx2Oxpya4JXI+sMf5MN9MTv2/icHOQq85xtQB0U2YTJv5d7+p+uOx2EJX80QJH1iO/aVWCVaRSnTQnVqKoAWgiJ7/1OE7mFdWSrMSSRVpR8xUn9BjsdhzDVxqH+Ui3+Z82gfyFlE/ftF1CgHsCTP6D6YB8ZpAZ2oBYawbeoBP5k47HYbl/8QI5e0EH1K5Q9csUxXWk9TzGq6q46GWgn0brIvOLNegU4oMuruKa1RTAt8JST03uRO/zvjsdik4AhJ4j0is0UTA/myoWObrH46VcUqfZV0q1vXpPa2Evj9Yu6ux8zorN7kSfzx2Ow6j+ceR9RFpdk/NIu8Xy6zSt/wDbP5RGNS5JqaqOXJAJV2QW2Apuw+cj8zj5jsRh/wCQjmr3gSvp+bxI/LmWrvmRUpz5y253SnqFpi5ck2vbthC4tnAuYailKlTptTSoVRSACtN2gX2JMnrYXx2OxzxUVYmakmgXThUwdI/hjlHik8g2A+LYdtsUcpTFTOU9YnVUEjob7e2PuOxp4Ggmt/YfaBC8aQeAZX/EcsTl6R10vEYFQQW8raiOpljv6YB8eyyDidSlpGjx2tJ6DVG9huLbDaIBHY7CuY/hh3+8Fm6c4rc1sGoVc1pAqIlNU0yAoBiwnt3nFPhmW8SiKrsxcoGJJ6wPTbH3HYXk/wAofLgP4x6f9MH+QuE0a2eZKtNXQUz5WuDK6bjrA27Y1Lg3KmUymqnQpaUqyXBZmm0feJ6E47HYdTWSkG2dP/sIthwG8YReE8Do/wCIVKDg1KdNtKq56XiYiY9fnODnP/K2Xq5Vl0mmKAd0FOBJCqBqkGRBOOx2G8AkJLgamIQBlMYNwnjVSjmaDKFOkggEGD7wRhvytbxWLFVUt5vKNiQ0xMwMdjsJ9JUNNzFJv0pjReE8JQ66UtpWna4kHTrmY31XnCJ+1SkEesoH3lubnfv+Xtj5jsNMypf+5PrBJlh3QB5cEZckb6z/AO0YuGuZ6b9hjsdhDGf4hfMwpMvEVQ+g/s/1OLtDJLbfY/kPa3yx9x2F1HsxUmCFPg1ON2+v9MdjsdgYJiQaR//Z"
}

export const CORR_QUESTION_RUGBY1: Correcting = {
    id: 21,
    description: "Le signe des anglais est la rose",
    picture: "https://anecsport.com/wp-content/uploads/2022/03/Logo-XV-de-la-Rose.jpeg"
};

export const CORR_QUESTION_RUGBY2: Correcting = {
    id: 22,
    description: "La Nouvelle-Zélande est l'équipe la plus titrée",
    picture: "https://www.rugbyworldcup.com/img/icons/flags/nzl.svg"
};

export const CORR_QUESTION_RUGBY3: Correcting = {
    id: 23,
    description: "Le meilleur joueur de tous les temps est Richie McCaw",
    picture: "https://www.rugbyworldcup.com/img/icons/flags/nzl.svg"
};

export const CORR_QUESTION_HYGIENE1: Correcting = {
    id: 24,
    description: "Il faut se laver les mains avec du savon",
    picture: "https://remeng.rosselcdn.net/sites/default/files/dpistyles_v2/rem_16_9_1124w/2020/03/05/node_136509/11576673/public/2020/03/05/B9722822728Z.1_20200305205431_000%2BGBKFLQFMT.1-0.jpg?itok=4ynvFijT1583501827"
};

