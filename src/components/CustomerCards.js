import * as React from 'react' 
import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import classNames from 'classnames'


import {
  Card,
  CardHeader,
  CardActions,
  Avatar
} from '@material-ui/core'


import IconButton from '@material-ui/core/IconButton'

import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import ModalConfirm from './ModalConfirm'

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 345,
  }
}))

const CustomerCard = ({
  name,
  lastname,
  email,
  avatar,
  className
}) => {
  const classes = useStyles()

  const [openModal, setOpenModal] = useState(false)

  const handleToggleOpenModal = () => {
    setOpenModal(!openModal)
  }

  const handleConfirmModal = () => {
    alert('ok')
  }

  const HandleRemoveCustomer = () => {
    handleToggleOpenModal ()
  }

  return (
    <>
    <Card className={classNames(className, classes.root)}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" src={`${avatar}`}>
            R
          </Avatar>
        }
        title={`${name} ${lastname}`}
        subheader={`${email}`}
      />
      <CardActions disableSpacing>
        <IconButton aria-label="Editar Clientes">
          <EditIcon />
        </IconButton>
        <IconButton aria-label="Remover Cadastro" onClick={HandleRemoveCustomer }>
          <DeleteForeverIcon />
        </IconButton>
      </CardActions>
    </Card>
    <ModalConfirm 
    open={openModal}  
    onClose={handleToggleOpenModal}
    onConfirm={handleConfirmModal}
    title="Deseja realmente excluir este cadastro?"
    message="Ao confirmar não será possível reverter esta operação"
    />
    </>
  )
}

export default CustomerCard