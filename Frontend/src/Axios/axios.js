import axios from "axios";

const API_KEY = process.env.API_KEY
const API_ENDPOINT = "https://api.deeparteffects.com/v1/noauth"

const getStyles = () => {
      return axios.post(`${API_ENDPOINT}/styles`, {
            headers: {
                  'x-api-key': API_KEY
            }
      })
}

const applyArtEffect = (styleId , imageBase64Encoded , imageSize , partnerId , optimizeForPrint , useOriginalColors) => {
      return axios.post(
            `${API_ENDPOINT}/upload`,
            {
                  styleId,
                  imageBase64Encoded,
                  imageSize,
                  partnerId,
                  optimizeForPrint,
                  useOriginalColors
            },
            {
                  headers : {
                        'x-api-key' : API_KEY
                  }
            }
      )
}

const getSubmissionStatus = (submissionId) => {
      return axios.post(
            `${API_ENDPOINT}/result?submissionId=${submissionId}`,
            {
                  headers : {
                        'x-api-key' : API_KEY
                  }
            }
      )
}

export {getStyles , applyArtEffect , getSubmissionStatus}