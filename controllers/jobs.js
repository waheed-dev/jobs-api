const getAllJobs = (req,res) => (
   res.status(200).send('All jobs')
)
const getJob = (req,res) => (
    res.status(200).send('one job')
 )
const createJob = (req,res) => (
    res.status(200).send('create job')
 )
 const updateJob = (req,res) => (
    res.status(200).send('update job')
 )
 const deleteJob = (req,res) => (
    res.status(200).send('delete job')
 )


module.exports = {getAllJobs,getJob,createJob,updateJob,deleteJob}
