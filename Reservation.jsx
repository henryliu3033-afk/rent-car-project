function Reservation(){
    const ReservationDate = new Date();

    
    
    
    
    
    return(<>
    <div className="reservation">
        <div className="reservation-content">
    <form>
        <label>想要預定的時間</label>
        <input type="Date" value={ReservationDate}/>
        <label>駕駛人</label>
        <input type="number"/>
        <select name="car-lisence" id="lisence">
            <option value="taiwan">台灣國際駕照</option>
            <option value="USA">美國國際駕照</option>
            <option value="japan">日本國際駕照</option>
        </select>
        <button>提交預定</button>




    </form>
    </div>
    </div>    
    </>)
}

export default Reservation