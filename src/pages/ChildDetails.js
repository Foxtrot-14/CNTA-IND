import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';

import { useNavigate } from "react-router-dom";
import instance from '../Request'

import plot from '../Plot'

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import Plot from 'react-plotly.js';

import { useMediaQuery } from 'react-responsive'

function ChildDetails() {
  const { id } = useParams()
  const navigate = useNavigate()

  const isMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  const [user, setUser] = useState()
  const [child, setChild] = useState()
  const [error, setError] = useState()

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState(0);
  const [city, setCity] = useState("");
  const [guardian, setGuardian] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [muac, setMuac] = useState("");
  const [cc, setCC] = useState("");
  const [whr, setWhr] = useState("");
  const [mw, setMw] = useState(false);
  const [stunting, setStunting] = useState("");
  const [fd, setFd] = useState(false);
  const [hc, setHc] = useState("");
  const [diagnosis, setDiagnosis] = useState('')
  const [status, setStatus] = useState(1)

  const getChild = async () => {
    if(!user) {
        return
    }
    try {
        let result = await instance.request({
          url:`child/${id}`,
          method: 'get',
          headers: {
            'Authorization': `Bearer ${user}`
          },
          data: {
          },
        })

        setChild(result.data)

        setName(result.data.name)
        setAge(result.data.age)
        setGender(result.data.gender)
        setCity(result.data.city)
        setGuardian(result.data.f_name)
        setHeight(result.data.height)
        setWeight(result.data.weight)
        setBmi(result.data.bmi)
        setMuac(result.data.muac)
        setCC(result.data.chestc)
        setWhr(result.data.wtohr)
        setMw(result.data.msclwstng)
        setStunting(result.data.stntng)
        setFd(result.data.fngr_dete)
        setHc(result.data.headc)
        setDiagnosis(result.data.diagnosis)
        setStatus(result.data.status)

      } catch (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          setError(error.response.data.errors)
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
      }
  }

  useEffect(() => {
    let x = localStorage.getItem('access')
    if(x=== null) {
      navigate('/login')
    }
    setUser(x)
  }, [])

  useEffect(() => {
    getChild()
  }, [user])

  const handleUpdate = async () => {
    console.log(gender)
    try {
      let result = await instance.request({
        url:`child/${id}/`,
        method: 'put',
        headers: {
          'Authorization': `Bearer ${user}`
        },
        data: {
          'name':name,
          'age':parseFloat(age),
          'gender': parseFloat(gender),
          'f_name': guardian,
          'height': parseFloat(height),
          'weight': parseFloat(weight),
          'bmi': parseFloat(bmi),
          'muac': parseFloat(muac),
          'chestc': parseFloat(cc),
          'headc': parseFloat(hc),
          'msclwstng': (mw),
          'fngr_dete': fd,
          'city':city,
          'diagnosis':diagnosis,
          'status':status
        },
      })

      navigate('/welcome')

    } catch(error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        setError(error.response.data.errors)
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log(error.config);
    }
  };

  const handleDelete = async () => {
    try {
        let result = await instance.request({
          url:`child/${id}`,
          method: 'delete',
          headers: {
            'Authorization': `Bearer ${user}`
          },
          data: {
          },
        })
  
        navigate('/welcome')
  
      } catch(error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          setError(error.response.data.errors)
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
      }
  }


  const [bmigsd0, setbmigsd0] = useState()
  const [bmigsd1, setbmigsd1] = useState()
  const [bmigsd2, setbmigsd2] = useState()
  const [bmigsd3, setbmigsd3] = useState()
  const [bmigsd4, setbmigsd4] = useState()
  const [bmigsd5, setbmigsd5] = useState()
  const [bmigsd6, setbmigsd6] = useState()

  const bmigGet = async () => {
    let result = await plot.request({
      url: gender === 0 ? `bmib/` : `bmig/`,
      method: 'get',
      headers: {
        
      },
      data: {
      },
    })

    setbmigsd0(result.data.SD0)
    setbmigsd1(result.data.SD1)
    setbmigsd2(result.data.SD1neg)
    setbmigsd3(result.data.SD2)
    setbmigsd4(result.data.SD2neg)
    setbmigsd5(result.data.SD3)
    setbmigsd6(result.data.SD3neg)
  }

  const [muac0, setmuac0] = useState()
  const [muac1, setmuac1] = useState()
  const [muac2, setmuac2] = useState()
  const [muac3, setmuac3] = useState()
  const [muac4, setmuac4] = useState()
  const [muac5, setmuac5] = useState()
  const [muac6, setmuac6] = useState()

  const muacGet = async () => {
    let result = await plot.request({
      url: gender === 0 ? `muacb/` : `muacg/`,
      method: 'get',
      headers: {
        
      },
      data: {
      },
    })

    setmuac0(result.data.SD0)
    setmuac1(result.data.SD1)
    setmuac2(result.data.SD1neg)
    setmuac3(result.data.SD2)
    setmuac4(result.data.SD2neg)
    setmuac5(result.data.SD3)
    setmuac6(result.data.SD3neg)
  }

  const [hcf0, sethcf0] = useState()
  const [hcf1, sethcf1] = useState()
  const [hcf2, sethcf2] = useState()
  const [hcf3, sethcf3] = useState()
  const [hcf4, sethcf4] = useState()
  const [hcf5, sethcf5] = useState()
  const [hcf6, sethcf6] = useState()

  const hcfGet = async () => {
    let result = await plot.request({
      url: gender === 0 ? `hcfb/` : `hcfg/`,
      method: 'get',
      headers: {
        
      },
      data: {
      },
    })

    sethcf0(result.data.SD0)
    sethcf1(result.data.SD1)
    sethcf2(result.data.SD1neg)
    sethcf3(result.data.SD2)
    sethcf4(result.data.SD2neg)
    sethcf5(result.data.SD3)
    sethcf6(result.data.SD3neg)
  }

  const [hfa0, sethfa0] = useState()
  const [hfa1, sethfa1] = useState()
  const [hfa2, sethfa2] = useState()
  const [hfa3, sethfa3] = useState()
  const [hfa4, sethfa4] = useState()
  const [hfa5, sethfa5] = useState()
  const [hfa6, sethfa6] = useState()

  const hfaGet = async () => {
    let result = await plot.request({
      url: gender === 0 ? `hfab/` : `hfag/`,
      method: 'get',
      headers: {
        
      },
      data: {
      },
    })

    sethfa0(result.data.SD0)
    sethfa1(result.data.SD1)
    sethfa2(result.data.SD1neg)
    sethfa3(result.data.SD2)
    sethfa4(result.data.SD2neg)
    sethfa5(result.data.SD3)
    sethfa6(result.data.SD3neg)
  }

  const [wfh0, setwfh0] = useState()
  const [wfh1, setwfh1] = useState()
  const [wfh2, setwfh2] = useState()
  const [wfh3, setwfh3] = useState()
  const [wfh4, setwfh4] = useState()
  const [wfh5, setwfh5] = useState()
  const [wfh6, setwfh6] = useState()

  const wfhGet = async () => {
    let result = await plot.request({
      url: gender === 0 ? `wfhb/` : `wfhg/`,
      method: 'get',
      headers: {
        
      },
      data: {
      },
    })

    setwfh0(result.data.SD0)
    setwfh1(result.data.SD1)
    setwfh2(result.data.SD1neg)
    setwfh3(result.data.SD2)
    setwfh4(result.data.SD2neg)
    setwfh5(result.data.SD3)
    setwfh6(result.data.SD3neg)
  }

  useEffect(() => {
    bmigGet()
    muacGet()
    hcfGet()
    hfaGet()
    wfhGet()
  }, [])



  return (
    <>
    <Navbar />
    <div className='w-full flex flex-col items-center pt-24 pb-10'>
      <h1 className='text-6xl font-bold'>Child Profile</h1>

      <h2 className={`mt-2 text-xl px-3 py-1 ${diagnosis === 'Normal' ? 'bg-green-400' : diagnosis === 'Moderate Malnutrition' ? 'bg-yellow-400' : 'bg-red-500'} rounded-lg`}>Diagnosis - {diagnosis}</h2>
        <div className='flex flex-col md:flex-row mt-10 w-full md:w-auto'>
            <div className='flex flex-col items-start mx-5 w-full md:w-auto'>
                <p>Name:</p>
                <input className='bg-gray-300 px-5 py-2 rounded-lg w-full' onChange={(e) => setName(e.target.value)} type='text' value={name} />
            </div>
            
            <div className='flex flex-col items-start mx-5'>
                <p>Age:</p>
                <input type='number' className='bg-gray-300 px-5 py-2 rounded-lg w-full' onChange={(e) => setAge(e.target.value)} value={age} />
            </div>
        </div>
        
        <div className='flex flex-col md:flex-row mt-5 w-full md:w-auto'>

            <div className='flex flex-col items-start mx-5'>
                <p>Name of Parent/Guardian:</p>
                <input className='bg-gray-300 px-5 py-2 rounded-lg w-full' onChange={(e) => setGuardian(e.target.value)} type='text' value={guardian} />
            </div>
            
            
            <div className='flex flex-col items-start mx-5'>
                <p>City:</p>
                <input className='bg-gray-300 px-5 py-2 rounded-lg w-full' onChange={(e) => setCity(e.target.value)} type='text' value={city} />
            </div>
        </div>

        <div className='flex flex-col md:flex-row mt-5 w-full md:w-auto'>

            <div className='flex flex-col items-start mx-5'>
                <p>Weight  (in kgs):</p>
                <input type='text' className='bg-gray-300 px-5 py-2 rounded-lg w-full' onChange={(e) => setWeight(e.target.value)} value={weight} />
            </div>
            
            
            <div className='flex flex-col items-start mx-5'>
                <p>Height (in cms):</p>
                <input type='number' className='bg-gray-300 px-5 py-2 rounded-lg w-full' onChange={(e) => setAge(e.target.value)} value={height} />
            </div>


        </div>

        <div className='flex flex-col md:flex-row mt-5 w-full md:w-auto'>
            <div className='flex flex-col items-start mx-5'>
                <p>BMI:</p>
                <input className='bg-gray-300 px-5 py-2 rounded-lg w-full' onChange={(e) => setBmi(e.target.value)} type='text' value={bmi} />
            </div>
            
            <div className='flex flex-col items-start mx-5'>
                <p>Mid-Upper Arm Circumference:</p>
                <input type='number' className='bg-gray-300 px-5 py-2 rounded-lg w-full' onChange={(e) => setMuac(e.target.value)} value={muac} />
            </div>
        </div>

        <div className='flex flex-col md:flex-row mt-5 w-full md:w-auto'>
            <div className='flex flex-col items-start mx-5'>
                <p>Chest Circumference:</p>
                <input className='bg-gray-300 px-5 py-2 rounded-lg w-full' onChange={(e) => setCC(e.target.value)} type='text' value={cc} />
            </div>
            
            <div className='flex flex-col items-start mx-5'>
                <p>Head Circumference:</p>
                <input type='number' className='bg-gray-300 px-5 py-2 rounded-lg w-full' onChange={(e) => setHc(e.target.value)} value={hc} />
            </div>
        </div>


        <div className='flex flex-col md:flex-row mt-5'>

            <div className='flex flex-col items-start mx-5'>
                <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">
                    Gender:
                    </FormLabel>
                    <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    value={gender}
                    onChange={(e) => {
                      
                        setGender(e.target.value)
                    }}
                    >
                    <FormControlLabel
                        value={0}
                        control={<Radio />}
                        label="Male"
                    />
                    <FormControlLabel 
                        value={1} 
                        control={<Radio />} 
                        label="Female" 
                    />
                    </RadioGroup>
                </FormControl>
            </div>

            <div className='flex flex-col items-start mx-5'>
                <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">
                    Muscle Wasting
                    </FormLabel>
                    <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    value={mw}
                    onChange={(e) => {
                        setMw(e.target.value)
                    }}
                    >
                    <FormControlLabel
                        value={true}
                        control={<Radio />}
                        label="True"
                    />
                    <FormControlLabel 
                        value={false} 
                        control={<Radio />} 
                        label="False" 
                    />
                    </RadioGroup>
                </FormControl>
            </div>
            
            
            <div className='flex flex-col items-start mx-5'>
                <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">
                    Finger Deterioration
                    </FormLabel>
                    <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    value={fd}
                    onChange={(e) => {
                        setFd(e.target.value)
                    }}
                    >
                    <FormControlLabel
                        value={true}
                        control={<Radio />}
                        label="True"
                    />
                    <FormControlLabel 
                        value={false} 
                        control={<Radio />} 
                        label="False" 
                    />
                    </RadioGroup>
                </FormControl>
            </div>


        </div>
        
        <div className='flex mt-5'>

            <div className='flex flex-col items-start mx-5'>
                <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">
                    Status
                    </FormLabel>
                    <RadioGroup
                    row={!isMobile}
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    value={status}
                    
                    onChange={(e) => {
                        setStatus(e.target.value)
                    }}
                    >
                        <FormControlLabel
                            value={1}
                            control={<Radio />}
                            label="Normal"
                        />
                        <FormControlLabel 
                            value={2} 
                            control={<Radio />} 
                            label="Reported" 
                        />
                        <FormControlLabel 
                            value={3} 
                            control={<Radio />} 
                            label="Checked" 
                        />
                    </RadioGroup>
                </FormControl>
            </div>

        </div>

        <div className=''>
          <Plot
          config={{responsive:true}}
            data={[
              {
                x: [...Array(61).keys()],
                y: bmigsd0,
                type: 'line',
                mode: 'lines+markers',
                marker: {color: 'red'},
                name: 'SD0'
              },
              {
                x: [...Array(61).keys()],
                y: bmigsd1,
                type: 'line',
                mode: 'lines+markers',
                marker: {color: 'red'},
                name: 'SD1'
              },
              {
                x: [...Array(61).keys()],
                y: bmigsd2,
                type: 'line',
                mode: 'lines+markers',
                marker: {color: 'red'},
                name: 'SD1neg'
              },
              {
                x: [...Array(61).keys()],
                y: bmigsd3,
                type: 'line',
                mode: 'lines+markers',
                marker: {color: 'red'},
                name: 'SD2'
              },
              {
                x: [...Array(61).keys()],
                y: bmigsd4,
                type: 'scatter',
                mode: 'lines+markers',
                marker: {color: 'red'},
                name: 'SD2neg'
              },
              {
                x: [...Array(61).keys()],
                y: bmigsd5,
                type: 'line',
                mode: 'lines+markers',
                marker: {color: 'red'},
                name: 'SD3'
              },
              {
                x: [...Array(61).keys()],
                y: bmigsd6,
                type: 'line',
                mode: 'lines+markers',
                marker: {color: 'red'},
                name: 'SD3neg'
              },
              {
                x: [age],
                y: [bmi],
                type: 'scatter',
                mode: 'markers',
                marker: {color: 'green', size:16},
                name: 'Child'
              },
            ]}
            layout={{width: isMobile ? 460 : 920, height: isMobile ? 420 : 440, title: 'BMI'}}
          />
        </div>

        <div className=''>
          <Plot
            data={[
              {
                x: [...Array(61).keys()],
                y: muac0,
                type: 'line',
                mode: 'lines+markers',
                marker: {color: 'red'},
                name: 'SD0'
              },
              {
                x: [...Array(61).keys()],
                y: muac1,
                type: 'line',
                mode: 'lines+markers',
                marker: {color: 'red'},
                name: 'SD1'
              },
              {
                x: [...Array(61).keys()],
                y: muac2,
                type: 'line',
                mode: 'lines+markers',
                marker: {color: 'red'},
                name: 'SD1neg'
              },
              {
                x: [...Array(61).keys()],
                y: muac3,
                type: 'line',
                mode: 'lines+markers',
                marker: {color: 'red'},
                name: 'SD2'
              },
              {
                x: [...Array(61).keys()],
                y: muac4,
                type: 'scatter',
                mode: 'lines+markers',
                marker: {color: 'red'},
                name: 'SD2neg'
              },
              {
                x: [...Array(61).keys()],
                y: muac5,
                type: 'line',
                mode: 'lines+markers',
                marker: {color: 'red'},
                name: 'SD3'
              },
              {
                x: [...Array(61).keys()],
                y: muac6,
                type: 'line',
                mode: 'lines+markers',
                marker: {color: 'red'},
                name: 'SD3neg'
              },
              {
                x: [age],
                y: [muac*100],
                type: 'scatter',
                mode: 'markers',
                marker: {color: 'green', size:16},
                name: 'Child'
              },
            ]}
            layout={{width: isMobile ? 460 : 920, height: isMobile ? 420 : 440, title: 'Mid-Upper Arm Circumference'}}
          />
        </div>

        <div className=''>
          <Plot
            data={[
              {
                x: [...Array(61).keys()],
                y: hcf0,
                type: 'line',
                mode: 'lines+markers',
                marker: {color: 'red'},
                name: 'SD0'
              },
              {
                x: [...Array(61).keys()],
                y: hcf1,
                type: 'line',
                mode: 'lines+markers',
                marker: {color: 'red'},
                name: 'SD1'
              },
              {
                x: [...Array(61).keys()],
                y: hcf2,
                type: 'line',
                mode: 'lines+markers',
                marker: {color: 'red'},
                name: 'SD1neg'
              },
              {
                x: [...Array(61).keys()],
                y: hcf3,
                type: 'line',
                mode: 'lines+markers',
                marker: {color: 'red'},
                name: 'SD2'
              },
              {
                x: [...Array(61).keys()],
                y: hcf4,
                type: 'scatter',
                mode: 'lines+markers',
                marker: {color: 'red'},
                name: 'SD2neg'
              },
              {
                x: [...Array(61).keys()],
                y: hcf5,
                type: 'line',
                mode: 'lines+markers',
                marker: {color: 'red'},
                name: 'SD3'
              },
              {
                x: [...Array(61).keys()],
                y: hcf6,
                type: 'line',
                mode: 'lines+markers',
                marker: {color: 'red'},
                name: 'SD3neg'
              },
              {
                x: [age],
                y: [hc*100],
                type: 'scatter',
                mode: 'markers',
                marker: {color: 'green', size:16},
                name: 'Child'
              },
            ]}
            layout={{width: isMobile ? 460 : 920, height: isMobile ? 420 : 440, title: 'Head Circumference'}}
          />
        </div>

        <div className=''>
          <Plot
            data={[
              {
                x: [...Array(61).keys()],
                y: hfa0,
                type: 'line',
                mode: 'lines+markers',
                marker: {color: 'red'},
                name: 'SD0'
              },
              {
                x: [...Array(61).keys()],
                y: hfa1,
                type: 'line',
                mode: 'lines+markers',
                marker: {color: 'red'},
                name: 'SD1'
              },
              {
                x: [...Array(61).keys()],
                y: hfa2,
                type: 'line',
                mode: 'lines+markers',
                marker: {color: 'red'},
                name: 'SD1neg'
              },
              {
                x: [...Array(61).keys()],
                y: hfa3,
                type: 'line',
                mode: 'lines+markers',
                marker: {color: 'red'},
                name: 'SD2'
              },
              {
                x: [...Array(61).keys()],
                y: hfa4,
                type: 'scatter',
                mode: 'lines+markers',
                marker: {color: 'red'},
                name: 'SD2neg'
              },
              {
                x: [...Array(61).keys()],
                y: hfa5,
                type: 'line',
                mode: 'lines+markers',
                marker: {color: 'red'},
                name: 'SD3'
              },
              {
                x: [...Array(61).keys()],
                y: hfa6,
                type: 'line',
                mode: 'lines+markers',
                marker: {color: 'red'},
                name: 'SD3neg'
              },
              {
                x: [age],
                y: [height],
                type: 'scatter',
                mode: 'markers',
                marker: {color: 'green', size:16},
                name: 'Child'
              },
            ]}
            layout={{width: isMobile ? 460 : 920, height: isMobile ? 420 : 440, title: 'Height for Age'}}
          />
        </div>

        <div className=''>
          <Plot
            data={[
              {
                x: [...Array(61).keys()],
                y: wfh0,
                type: 'line',
                mode: 'lines+markers',
                marker: {color: 'red'},
                name: 'SD0'
              },
              {
                x: [...Array(61).keys()],
                y: wfh1,
                type: 'line',
                mode: 'lines+markers',
                marker: {color: 'red'},
                name: 'SD1'
              },
              {
                x: [...Array(61).keys()],
                y: wfh2,
                type: 'line',
                mode: 'lines+markers',
                marker: {color: 'red'},
                name: 'SD1neg'
              },
              {
                x: [...Array(61).keys()],
                y: wfh3,
                type: 'line',
                mode: 'lines+markers',
                marker: {color: 'red'},
                name: 'SD2'
              },
              {
                x: [...Array(61).keys()],
                y: wfh4,
                type: 'scatter',
                mode: 'lines+markers',
                marker: {color: 'red'},
                name: 'SD2neg'
              },
              {
                x: [...Array(61).keys()],
                y: wfh5,
                type: 'line',
                mode: 'lines+markers',
                marker: {color: 'red'},
                name: 'SD3'
              },
              {
                x: [...Array(61).keys()],
                y: wfh6,
                type: 'line',
                mode: 'lines+markers',
                marker: {color: 'red'},
                name: 'SD3neg'
              },
              {
                x: [height],
                y: [weight],
                type: 'scatter',
                mode: 'markers',
                marker: {color: 'green', size:16},
                name: 'Child'
              },
            ]}
            layout={{width: isMobile ? 460 : 920, height: isMobile ? 420 : 440, title: 'Weight for height'}}
          />
        </div>

        <div className='flex flex-col md:flex-row w-full md:w-auto mt-5'>
            <div className='flex flex-col items-start md:mx-5'>
                <button onClick={handleDelete} className='bg-red-500'>Delete</button>
            </div>
            
            <div className='flex flex-col items-start md:mx-5 mt-5 md:mt-0'>
            <button onClick={handleUpdate} className='bg-cyan-500'>Update</button>
            </div>
        </div>

    </div>



    <Footer />
    </>
  )
}

export default ChildDetails