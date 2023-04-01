import { insert, getALL, update, remove } from"@/modules/data/ConsumoDAO.js"

const handleInsert = async(consumo) = {
    const result = {
        status: 200,
        data: {}
    }

    try {
        result.data = await insert(consumo)
    } catch (error) {
        result.status = 500
        result.data = error.message
    }
}

const handleGetALL = async () => {
    const result = {
        status: 200,
        data: {}
    }

    try {
        result.data = await getALL()
    } catch (error) {
        result.status = 500
        result.data = error.message
    }
}

const handleUpdate = async (consumo) => {
    const result = {
        status: 200,
        data: {}
    }

    try {
        result.data = await update(consumo)
    } catch (error) {
        result.status = 500
        result.data = error.message
    }
}

const handleRemove = async (id) => {
    const result = {
        status: 200,
        data: {}
    }

    try {
        result.data = await remove(id)
    } catch (error) {
        result.status = 500
        result.data = error.message
    }

    return result
}

export { handleInsert, handleGetALL, handleUpdate, handleRemove }